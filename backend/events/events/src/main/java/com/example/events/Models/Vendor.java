package com.example.events.Models;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "vendors")
public class Vendor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String contactEmail;
    private String serviceType; 
    private String contractDetails;

    // Many-to-Many with Event
    @ManyToMany(mappedBy = "vendors")
    @JsonIgnoreProperties("vendors") 
    private List<Event> events = new ArrayList<>();

    // Many-to-One with Venue 
    @ManyToOne
    @JoinColumn(name = "venue_id")
    @JsonIgnoreProperties("preferredVendors")
    private Venue venue;
}
