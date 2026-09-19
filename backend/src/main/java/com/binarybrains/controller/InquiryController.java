package com.binarybrains.controller;

import com.binarybrains.model.Inquiry;
import com.binarybrains.service.InquiryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/inquiries")
public class InquiryController {

    private final InquiryService inquiryService;

    public InquiryController(InquiryService inquiryService) {
        this.inquiryService = inquiryService;
    }

    @PostMapping
    public ResponseEntity<?> createInquiry(@Valid @RequestBody Inquiry inquiry) {
        Inquiry saved = inquiryService.saveInquiry(inquiry);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Thank you! Your inquiry has been received. Our team at BinaryBrains will get in touch shortly.");
        response.put("inquiry", saved);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Inquiry>> getInquiries() {
        return ResponseEntity.ok(inquiryService.getAllInquiries());
    }
}
