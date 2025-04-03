//package com.example.events.Controllers;
//
//
//
//import com.example.events.Models.Booking;
//import com.example.events.Services.BookingService;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/bookings")
//public class BookingController {
//    private final BookingService bookingService;
//
//    public BookingController(BookingService bookingService) {
//        this.bookingService = bookingService;
//    }
//
//    @GetMapping
//    public List<Booking> getAllBookings() {
//        return bookingService.getAllBookings();
//    }
//
//    @GetMapping("/{id}")
//    public Booking getBookingById(@PathVariable Long id) {
//        return bookingService.getBookingById(id);
//    }
//
//    @PostMapping
//    @PreAuthorize("hasRole('ADMIN')")
//    public Booking addBooking(@RequestBody Booking booking) {
//        return bookingService.addBooking(booking);
//    }
//
//    @PutMapping("/{id}")
//    @PreAuthorize("hasRole('ADMIN')")
//    public Booking updateBooking(@PathVariable Long id, @RequestBody Booking bookingDetails) {
//        return bookingService.updateBooking(id, bookingDetails);
//    }
//
//    @DeleteMapping("/{id}")
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> deleteBooking(@PathVariable Long id) {
//        bookingService.deleteBooking(id);
//        return ResponseEntity.ok().build();
//    }
//}
