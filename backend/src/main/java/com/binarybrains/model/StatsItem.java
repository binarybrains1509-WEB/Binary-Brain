package com.binarybrains.model;

public class StatsItem {

    private String label;
    private String value;
    private String icon;
    private String description;

    public StatsItem() {}

    public StatsItem(String label, String value, String icon, String description) {
        this.label = label;
        this.value = value;
        this.icon = icon;
        this.description = description;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
