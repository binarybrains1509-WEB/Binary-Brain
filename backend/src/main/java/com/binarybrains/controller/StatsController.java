package com.binarybrains.controller;

import com.binarybrains.model.StatsItem;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/stats")
public class StatsController {

    @GetMapping
    public ResponseEntity<List<StatsItem>> getStats() {
        List<StatsItem> stats = Arrays.asList(
                new StatsItem("Happy Clients", "100+", "Smile", "Global client satisfaction"),
                new StatsItem("Projects Delivered", "150+", "Rocket", "Production enterprise releases"),
                new StatsItem("Student Projects", "50+", "GraduationCap", "Successful university submissions"),
                new StatsItem("Years of Experience", "5+", "Trophy", "Continuous technology excellence"),
                new StatsItem("Industries Served", "10+", "Globe", "Fintech, EdTech, Healthcare & more")
        );
        return ResponseEntity.ok(stats);
    }
}
