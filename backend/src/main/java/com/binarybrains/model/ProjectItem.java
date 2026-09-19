package com.binarybrains.model;

import java.util.List;

public class ProjectItem {

    private String id;
    private String title;
    private String category;
    private String audience;
    private String description;
    private List<String> techStack;
    private String deviceType; // "laptop" or "mobile"
    private String liveUrl;

    public ProjectItem() {}

    public ProjectItem(String id, String title, String category, String audience, String description,
                       List<String> techStack, String deviceType, String liveUrl) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.audience = audience;
        this.description = description;
        this.techStack = techStack;
        this.deviceType = deviceType;
        this.liveUrl = liveUrl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getAudience() {
        return audience;
    }

    public void setAudience(String audience) {
        this.audience = audience;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getTechStack() {
        return techStack;
    }

    public void setTechStack(List<String> techStack) {
        this.techStack = techStack;
    }

    public String getDeviceType() {
        return deviceType;
    }

    public void setDeviceType(String deviceType) {
        this.deviceType = deviceType;
    }

    public String getLiveUrl() {
        return liveUrl;
    }

    public void setLiveUrl(String liveUrl) {
        this.liveUrl = liveUrl;
    }
}
