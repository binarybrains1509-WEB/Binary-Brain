package com.binarybrains.controller;

import com.binarybrains.model.ProjectItem;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final List<ProjectItem> projects = new ArrayList<>();

    public ProjectController() {
        // Matching the 5 recent project cards in the mockup
        projects.add(new ProjectItem(
                "p1", "E-Commerce Website", "Web Application", "BUSINESS",
                "High-performance luxury e-commerce platform with real-time stock sync and stripe checkout.",
                Arrays.asList("React", "Spring Boot", "Stripe", "PostgreSQL"),
                "laptop", "https://example.com/demo/ecommerce"
        ));

        projects.add(new ProjectItem(
                "p2", "ERP System", "Enterprise Software", "BUSINESS",
                "Scalable multi-tenant enterprise resource planning dashboard with telemetry and financial metrics.",
                Arrays.asList("Java", "Spring Boot", "React", "Docker", "MySQL"),
                "laptop", "https://example.com/demo/erp"
        ));

        projects.add(new ProjectItem(
                "p3", "Mobile Application", "iOS & Android", "BUSINESS",
                "Modern cross-platform fintech and wealth tracker app featuring biometric security and push alerts.",
                Arrays.asList("React Native", "Spring Cloud", "Redis", "AWS"),
                "mobile", "https://example.com/demo/mobile"
        ));

        projects.add(new ProjectItem(
                "p4", "Learning Management System", "EdTech Platform", "STUDENT",
                "Interactive LMS for university course tracking, automated grading, and live student-mentor sessions.",
                Arrays.asList("React", "Node.js", "MongoDB", "WebRTC"),
                "laptop", "https://example.com/demo/lms"
        ));

        projects.add(new ProjectItem(
                "p5", "Business Website", "Corporate Portal", "BUSINESS",
                "Next-generation corporate technology website with ultra-fast Core Web Vitals and dynamic CMS.",
                Arrays.asList("React", "Tailwind CSS", "Spring Boot", "Docker"),
                "laptop", "https://example.com/demo/business"
        ));
    }

    @GetMapping
    public ResponseEntity<List<ProjectItem>> getProjects() {
        return ResponseEntity.ok(projects);
    }
}
