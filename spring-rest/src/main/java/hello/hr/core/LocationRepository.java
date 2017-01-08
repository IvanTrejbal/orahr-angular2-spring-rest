package hello.hr.core;

import hello.hr.entities.Location;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author tatik
 */
public interface LocationRepository  extends PagingAndSortingRepository<Location, Integer> {
    
}
