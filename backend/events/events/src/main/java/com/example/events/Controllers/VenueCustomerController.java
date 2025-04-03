package com.example.events.Controllers;



import com.example.events.Models.Venue;
import com.example.events.Repositories.VenueRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/customer/venues")
public class VenueCustomerController {

    private final VenueRepository venueRepository;

    public VenueCustomerController(VenueRepository venueRepository) {
        this.venueRepository = venueRepository;
    }

    @GetMapping
    @PreAuthorize("permitAll()") // Explicitly mark as public
    public List<Venue> getAllVenues(
            @RequestParam(required = false) String location,
            @RequestParam(required = false) Integer minCapacity
    ) {
        if (location != null && minCapacity != null) {
            return venueRepository.findByLocationAndCapacityGreaterThanEqual(location, minCapacity);
        } else if (location != null) {
            return venueRepository.findByLocation(location);
        } else if (minCapacity != null) {
            return venueRepository.findByCapacityGreaterThanEqual(minCapacity);
        }
        return venueRepository.findAll();
    }
}
