package com.binarybrains.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class Inquiry {

    private String id;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Valid email is required")
    private String email;

    private String phone;

    @NotBlank(message = "Audience type is required (STUDENT or BUSINESS)")
    private String audienceType; // "STUDENT" or "BUSINESS"

    private String serviceNeeded;
    private String budgetOrTimeline;
    private String message;
    private LocalDateTime createdAt;

    public Inquiry() {
        this.createdAt = LocalDateTime.now();
    }

    public Inquiry(String id, String name, String email, String phone, String audienceType,
                   String serviceNeeded, String budgetOrTimeline, String message) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.audienceType = audienceType;
        this.serviceNeeded = serviceNeeded;
        this.budgetOrTimeline = budgetOrTimeline;
        this.message = message;
        this.createdAt = LocalDateTime.now();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAudienceType() {
        return audienceType;
    }

    public void setAudienceType(String audienceType) {
        this.audienceType = audienceType;
    }

    public String getServiceNeeded() {
        return serviceNeeded;
    }

    public void setServiceNeeded(String serviceNeeded) {
        this.serviceNeeded = serviceNeeded;
    }

    public String getBudgetOrTimeline() {
        return budgetOrTimeline;
    }

    public void setBudgetOrTimeline(String budgetOrTimeline) {
        this.budgetOrTimeline = budgetOrTimeline;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
