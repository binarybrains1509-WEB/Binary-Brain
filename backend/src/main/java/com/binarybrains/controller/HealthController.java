package com.binarybrains.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<Map<String, Object>> checkHealth() {
        Map<String, Object> health = new HashMap<>();
        health.put("status", "UP");
        health.put("company", "BinaryBrains");
        health.put("tagline", "Build Today. A Brighter Tomorrow.");
        health.put("timestamp", LocalDateTime.now().toString());
        health.put("version", "1.0.0");
        return ResponseEntity.ok(health);
    }
}
