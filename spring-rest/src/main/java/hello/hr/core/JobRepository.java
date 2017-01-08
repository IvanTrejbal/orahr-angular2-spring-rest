package hello.hr.core;

import hello.hr.entities.Job;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author tatik
 */
public interface JobRepository  extends PagingAndSortingRepository<Job, String> {
    
}
