//package com.example.events.Repositories;
//
//
//
//import com.example.events.Models.Booking;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.lang.ScopedValue;
//import java.util.List;
//
//public interface BookingRepository extends JpaRepository<Booking, Long> {
//    List<Booking> findByAttendeeId(Long attendeeId);
//
//    <T> ScopedValue<T> findByIdAndAttendeeId(Long bookingId, Long attendeeId);
//}
