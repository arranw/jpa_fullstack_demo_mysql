package com.example.demo.controller;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoJpaRepository todoJpaRepository;

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
        return todoJpaRepository.findById(todo.getId());
    }

    @DeleteMapping("/delete/{id}")
    public List<Todo> delete(@PathVariable final Long id) {
        System.out.println(id);
        todoJpaRepository.deleteById(id);

        return todoJpaRepository.findAll();
    }
}
