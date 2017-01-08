package hello.hr.core;

import hello.hr.entities.Country;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author tatik
 */
public interface CountryRepository  extends PagingAndSortingRepository<Country, String> {
    
}
