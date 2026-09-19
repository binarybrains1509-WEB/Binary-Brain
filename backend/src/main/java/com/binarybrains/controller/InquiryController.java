package com.binarybrains.controller;

import com.binarybrains.model.Inquiry;
import com.binarybrains.service.InquiryService;
import jakarta.validation.Valid;
import org.springframework.mail.MailException;
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
        Inquiry saved;
        try {
            saved = inquiryService.saveInquiry(inquiry);
        } catch (MailException exception) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "We could not send your inquiry email. Please try again later.");
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).body(response);
        }
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
