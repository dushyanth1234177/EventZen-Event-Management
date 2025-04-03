//package com.example.events.Services;
//
//
//
//import com.example.events.Models.*;
//import com.example.events.Repositories.*;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//public class BookingService {
//    private final BookingRepository bookingRepo;
//    private final AttendeeRepository attendeeRepo;
//    private final EventRepository eventRepo;
//    private final VenueRepository venueRepo;
//
//    @Transactional
//    public Booking createBooking(Long attendeeId, Long eventId, Long venueId) {
//        Attendee attendee = attendeeRepo.findById(attendeeId)
//                .orElseThrow(() -> new RuntimeException("Attendee not found"));
//        Event event = eventRepo.findById(eventId)
//                .orElseThrow(() -> new RuntimeException("Event not found"));
//        Venue venue = venueRepo.findById(venueId)
//                .orElseThrow(() -> new RuntimeException("Venue not found"));
//
//        Booking booking = new Booking();
//        booking.setAttendee(attendee);
//        booking.setEvent(event);
//        booking.setVenue(venue);
//
//        return bookingRepo.save(booking);
//    }
//
//    public List<Booking> getUserBookings(Long attendeeId) {
//        return bookingRepo.findByAttendeeId(attendeeId);
//    }
//
//    @Transactional
//    public void cancelBooking(Long bookingId, Long attendeeId) {
//        Booking booking = bookingRepo.findByIdAndAttendeeId(bookingId, attendeeId)
//                .orElseThrow(() -> new RuntimeException("Booking not found"));
//        bookingRepo.delete(booking);
//    }
//}