package com.example.demo.model;

public class TodoAction {

    public static final String TODO_DELETED = "TODO_DELETED";
    public static final String TODO_ADDED = "TODO_ADDED";

    private String type;
    private Todo payload;

    public TodoAction(String action, Todo payload) {
        this.type = action;
        this.payload = payload;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Todo getPayload() {
        return payload;
    }

    public void setPayload(Todo payload) {
        this.payload = payload;
    }
}
