export const posts = [
  {
    slug: "privacy-preserving-learning",
    kicker: "FIELD NOTE 01",
    readTime: "5 MIN READ",
    title: "Privacy-preserving learning changes the system — not just the model.",
    excerpt: "Federated learning and differential privacy introduce constraints around data movement, aggregation, evaluation, and reproducibility. The interesting engineering begins where those constraints meet the pipeline.",
    tags: ["FEDERATED LEARNING", "DIFFERENTIAL PRIVACY", "ML SYSTEMS"],
    paragraphs: [
      "Privacy-preserving machine learning is often presented as a modeling problem: choose a federated algorithm, add noise, and train. In practice, privacy changes the shape of the whole system. Where data lives, how updates are aggregated, what gets logged, and how experiments are reproduced all become first-class design decisions.",
      "Federated learning moves the training loop closer to the data rather than moving the raw data to one central location. That changes the failure modes. Devices can disappear, client distributions can drift, communication becomes a resource, and aggregation becomes part of the learning system rather than an implementation detail.",
      "Differential privacy adds a second constraint: the system must control what can be inferred from outputs. That means privacy accounting belongs beside model evaluation. Accuracy, calibration, communication cost, convergence, and privacy budget should be measured together rather than in separate reports.",
      "The practical lesson is simple: privacy cannot be bolted onto a finished ML stack. It should shape the data flow, experiment tracking, aggregation logic, and evaluation protocol from the start. That is where privacy-preserving AI becomes an engineering discipline instead of a checkbox."
    ]
  },
  {
    slug: "notebook-to-production",
    kicker: "FIELD NOTE 02",
    readTime: "4 MIN READ",
    title: "From notebook to API: the layer where ML becomes software.",
    excerpt: "A model that works in a notebook is only the beginning. Reproducible preprocessing, stable inference, validation, packaging, and observability are what turn an experiment into a service.",
    tags: ["MLOPS", "FASTAPI", "REPRODUCIBILITY"],
    paragraphs: [
      "A notebook optimizes for exploration. A production service optimizes for repeatability. The transition between the two is where many machine learning projects become fragile: preprocessing is duplicated, features drift, model files are loaded differently, and the path from input to prediction is difficult to test.",
      "The first useful boundary is a single inference path. Validation, preprocessing, model loading, and post-processing should be explicit and deterministic. Once that boundary exists, an API such as FastAPI can expose the model without embedding notebook state or hidden assumptions in the request handler.",
      "Packaging matters because the environment is part of the model. Pin dependencies, make the entry point reproducible, isolate configuration, and containerize the service when the deployment target benefits from it. The goal is not more tooling; it is fewer unknowns between two runs of the same experiment.",
      "Finally, measure the service, not only the model. Latency, throughput, error rates, input drift, and evaluation metrics form the operational feedback loop. The model may be the most visible artifact, but the software around it determines whether the system remains useful."
    ]
  },
  {
    slug: "memory-latency",
    kicker: "FIELD NOTE 03",
    readTime: "6 MIN READ",
    title: "What a memory-latency benchmark actually tells you.",
    excerpt: "Memory behavior is shaped by cache levels, access patterns, bandwidth, and the distance between the CPU and data. A useful benchmark makes those effects measurable without pretending one number explains the entire system.",
    tags: ["C++", "LINUX", "PERFORMANCE"],
    paragraphs: [
      "CPU performance is not only about arithmetic throughput. Modern workloads spend a large part of their time waiting for data, so the path from a load instruction to the memory subsystem can dominate execution time. That is why memory-latency measurement is useful: it exposes behavior that a CPU-only benchmark can hide.",
      "A latency benchmark should distinguish access patterns and working-set sizes. Small working sets may remain in a cache, while larger ones spill into deeper cache levels or main memory. Sequential and random access can also produce very different results because the hardware can prefetch some patterns more effectively than others.",
      "Latency and bandwidth are related but not interchangeable. Latency asks how long the system takes to service an access under a given pattern. Bandwidth asks how much data can be moved over time. A system can show strong aggregate bandwidth while still delivering poor latency for pointer-heavy or irregular workloads.",
      "The important engineering step is interpretation. Benchmark results should be tied to a workload, architecture, compiler settings, and measurement method. The number is evidence about a system under stated conditions — not a universal score for the machine."
    ]
  }
];

export function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}
