//package com.example.events.Models;
//
//
//
//import jakarta.persistence.*;
//import lombok.Data;
//import java.time.LocalDateTime;
//
//@Entity
//@Data
//@Table(name = "bookings")
//public class Booking {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    private LocalDateTime bookingTime = LocalDateTime.now();
//
//    @ManyToOne
//    @JoinColumn(name = "attendee_id", nullable = false)
//    private Attendee attendee;
//
//    @ManyToOne
//    @JoinColumn(name = "event_id", nullable = false)
//    private Event event;
//
//    @ManyToOne
//    @JoinColumn(name = "venue_id", nullable = false)
//    private Venue venue;
//}
