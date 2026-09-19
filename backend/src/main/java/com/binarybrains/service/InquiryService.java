package com.binarybrains.service;

import com.binarybrains.model.Inquiry;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class InquiryService {

    private final List<Inquiry> inquiries = new CopyOnWriteArrayList<>();

    public InquiryService() {
        // Initial sample inquiries for demonstration
        Inquiry studentInq = new Inquiry(
                UUID.randomUUID().toString(),
                "Aarav Sharma",
                "aarav.sharma@example.com",
                "+91 98765 43210",
                "STUDENT",
                "Final Year Projects",
                "2026 Batch",
                "Looking for guidance on an AI-powered healthcare diagnostic system using React and Spring Boot."
        );
        studentInq.setCreatedAt(LocalDateTime.now().minusDays(1));
        inquiries.add(studentInq);

        Inquiry bizInq = new Inquiry(
                UUID.randomUUID().toString(),
                "Priya Verma",
                "priya@techfusion.io",
                "+91 91234 56789",
                "BUSINESS",
                "ERP Solutions",
                "$5,000 - $10,000",
                "Need a custom cloud ERP dashboard for inventory tracking and client billing."
        );
        bizInq.setCreatedAt(LocalDateTime.now().minusHours(3));
        inquiries.add(bizInq);
    }

    public Inquiry saveInquiry(Inquiry inquiry) {
        if (inquiry.getId() == null || inquiry.getId().isBlank()) {
            inquiry.setId(UUID.randomUUID().toString());
        }
        if (inquiry.getCreatedAt() == null) {
            inquiry.setCreatedAt(LocalDateTime.now());
        }
        inquiries.add(0, inquiry);
        return inquiry;
    }

    public List<Inquiry> getAllInquiries() {
        return new ArrayList<>(inquiries);
    }
}
