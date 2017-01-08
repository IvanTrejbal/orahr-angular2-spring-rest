package hello.hr.core;

import hello.hr.entities.JobHistory;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 *
 * @author tatik
 */
public interface JobHistoryRepository  extends PagingAndSortingRepository<JobHistory, Integer> {
    
}
