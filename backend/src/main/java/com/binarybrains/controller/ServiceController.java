package com.binarybrains.controller;

import com.binarybrains.model.ServiceItem;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    private final List<ServiceItem> services = new ArrayList<>();

    public ServiceController() {
        // Student Services (Matching the 6 cards in mockup image)
        services.add(new ServiceItem(
                "s1", "STUDENT", "Final Year Projects",
                "Get guidance and complete projects with real-world technologies.",
                "GraduationCap", "Popular",
                Arrays.asList("Full Architecture & Source Code", "Viva & Report Assistance", "Modern Tech Stack (Spring, React, AI)")
        ));
        services.add(new ServiceItem(
                "s2", "STUDENT", "Resume Building",
                "Professional resumes that get you noticed.",
                "FileText", "ATS-Friendly",
                Arrays.asList("Industry-Standard Templates", "Keyword Optimization", "Recruiter Review")
        ));
        services.add(new ServiceItem(
                "s3", "STUDENT", "Portfolio Development",
                "Showcase your skills with an impressive portfolio website.",
                "Monitor", "High Impact",
                Arrays.asList("Custom Domain & Deployment", "Project Showcases", "Interactive Live Demos")
        ));
        services.add(new ServiceItem(
                "s4", "STUDENT", "Internship Guidance",
                "Learn, build and get ready for your dream career.",
                "Users", "Mentorship",
                Arrays.asList("Real-World Industry Tasks", "Code Reviews & Pair Programming", "Experience Certificate")
        ));
        services.add(new ServiceItem(
                "s5", "STUDENT", "Skill Development",
                "Workshops, resources and mentoring.",
                "BookOpen", "Hands-on",
                Arrays.asList("Full-Stack Web & App Bootcamps", "System Design Fundamentals", "Data Structures & Problem Solving")
        ));
        services.add(new ServiceItem(
                "s6", "STUDENT", "Career Consultation",
                "Personalized guidance for your career growth.",
                "MessageSquare", "1-on-1",
                Arrays.asList("Mock Interviews", "LinkedIn Profile Optimization", "Tech Roadmap Strategy")
        ));

        // Business Services (Matching the 6 cards in mockup image)
        services.add(new ServiceItem(
                "b1", "BUSINESS", "ERP Solutions",
                "Custom ERP for seamless business operations.",
                "Cog", "Enterprise",
                Arrays.asList("Inventory & Supply Chain", "HRMS & Payroll Management", "Role-Based Access Control")
        ));
        services.add(new ServiceItem(
                "b2", "BUSINESS", "Website Development",
                "Modern, responsive websites to grow your business.",
                "Globe", "Scalable",
                Arrays.asList("Next.js & React Frontends", "SEO & Performance Optimized", "Lightning Fast Load Times")
        ));
        services.add(new ServiceItem(
                "b3", "BUSINESS", "Mobile App Development",
                "Android & iOS applications tailored to your needs.",
                "Smartphone", "Native & Hybrid",
                Arrays.asList("Flutter & React Native", "Offline-First Support", "App Store & Play Store Publishing")
        ));
        services.add(new ServiceItem(
                "b4", "BUSINESS", "Custom Software",
                "Tailored solutions for your unique requirements.",
                "Code2", "Custom Built",
                Arrays.asList("Microservices Architecture", "Automated Workflows", "Legacy System Migration")
        ));
        services.add(new ServiceItem(
                "b5", "BUSINESS", "Cloud & DevOps",
                "Deployment, scaling and maintenance.",
                "Cloud", "Cloud-Native",
                Arrays.asList("AWS, Azure & GCP", "Docker & Kubernetes CI/CD", "24/7 Server Monitoring")
        ));
        services.add(new ServiceItem(
                "b6", "BUSINESS", "IT Support & Maintenance",
                "Ongoing support to keep your business running smoothly.",
                "Headphones", "24/7 SLA",
                Arrays.asList("Security Audits & Patches", "Performance Tuning", "Dedicated Technical Account Manager")
        ));
    }

    @GetMapping
    public ResponseEntity<List<ServiceItem>> getServices(@RequestParam(required = false) String audience) {
        if (audience != null && !audience.isBlank()) {
            List<ServiceItem> filtered = services.stream()
                    .filter(s -> s.getAudience().equalsIgnoreCase(audience))
                    .collect(Collectors.toList());
            return ResponseEntity.ok(filtered);
        }
        return ResponseEntity.ok(services);
    }
}
