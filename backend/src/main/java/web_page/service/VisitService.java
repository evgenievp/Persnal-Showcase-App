package web_page.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import web_page.model.VisitCounter;
import web_page.repo.VisitRepo;

@Service
public class VisitService {

    private final VisitRepo visitRepo;

    public VisitService(VisitRepo visitRepo) {
        this.visitRepo = visitRepo;
    }

    @Transactional
    public long incrementAndGet() {
        VisitCounter counter = visitRepo.findById(1L)
                .orElseGet(() -> visitRepo.save(new VisitCounter()));

        counter.setCount(counter.getCount() + 1);

        return counter.getCount();
    }
}
