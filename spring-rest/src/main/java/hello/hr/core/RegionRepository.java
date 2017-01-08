package hello.hr.core;

import hello.hr.entities.Region;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author tatik
 */
public interface RegionRepository  extends PagingAndSortingRepository<Region, Integer> {
    
}
