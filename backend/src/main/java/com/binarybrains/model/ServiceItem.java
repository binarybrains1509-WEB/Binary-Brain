package com.binarybrains.model;

import java.util.List;

public class ServiceItem {

    private String id;
    private String audience; // "STUDENT" or "BUSINESS"
    private String title;
    private String description;
    private String icon;
    private String badge;
    private List<String> highlights;

    public ServiceItem() {}

    public ServiceItem(String id, String audience, String title, String description, String icon, String badge, List<String> highlights) {
        this.id = id;
        this.audience = audience;
        this.title = title;
        this.description = description;
        this.icon = icon;
        this.badge = badge;
        this.highlights = highlights;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAudience() {
        return audience;
    }

    public void setAudience(String audience) {
        this.audience = audience;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getBadge() {
        return badge;
    }

    public void setBadge(String badge) {
        this.badge = badge;
    }

    public List<String> getHighlights() {
        return highlights;
    }

    public void setHighlights(List<String> highlights) {
        this.highlights = highlights;
    }
}
