package com.example.demo.controller;

import com.example.demo.model.Todo;
import com.example.demo.model.TodoAction;
import com.example.demo.repository.TodoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todos")
public class TodoController {

    private final TodoJpaRepository todoJpaRepository;
    final SimpMessagingTemplate template;

    public TodoController(SimpMessagingTemplate template, TodoJpaRepository todoJpaRepository) {
        this.template = template;
        this.todoJpaRepository = todoJpaRepository;
    }

    @GetMapping("/all")
    public List<Todo> findAll() {
        return todoJpaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Todo> findByName(@PathVariable final Long id) {
        return todoJpaRepository.findById(id);
    }

    @PostMapping("/insert")
    public Optional<Todo> insert(@RequestBody final Todo todo) {
        todoJpaRepository.save(todo);

        Optional<Todo> addedTodo = todoJpaRepository.findById(todo.getId());
        Todo wsTodo = addedTodo.get();

        template.convertAndSend("/topic/todo", new TodoAction(TodoAction.TODO_ADDED, wsTodo));
        return addedTodo;
    }

    @DeleteMapping("/delete/{id}")
    public List<Todo> delete(@PathVariable final Long id) {
        todoJpaRepository.deleteById(id);
        List<Todo> allTodos = todoJpaRepository.findAll();

        Todo wsTodo = new Todo();
        wsTodo.setId(id);

        template.convertAndSend("/topic/todo", new TodoAction(TodoAction.TODO_DELETED, wsTodo));
        return allTodos;
    }
}
