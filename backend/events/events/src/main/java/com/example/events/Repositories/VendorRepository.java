package com.example.events.Repositories;



import com.example.events.Models.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface VendorRepository extends JpaRepository<Vendor, Long> {
    List<Vendor> findByServiceType(String serviceType); // Filter vendors by service
    List<Vendor> findByVenueId(Long venueId);
}
