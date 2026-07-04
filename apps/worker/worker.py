import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("excel-visual-analytics-worker")


def run_once() -> None:
    logger.info("worker is ready for queued parsing tasks")


if __name__ == "__main__":
    run_once()
