import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("excel-visual-analytics-worker")


def run_once() -> None:
    logger.info("worker ready for parsing and refresh jobs")


if __name__ == "__main__":
    run_once()
