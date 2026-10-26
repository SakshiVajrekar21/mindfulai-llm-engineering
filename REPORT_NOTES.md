# Answer-book notes — Assignment H / LLM Engineering

Use these as a guide and rewrite in your own words. Record actual results; do not claim completion that did not occur.

## Section 1 — Article
- Article: “Let Mind Think And You Simply Be”, TOI SpeakingTree, by Swami Bhoomananda Tirtha.
- Central argument: Rather than fighting every thought, a person can notice thoughts, attend to useful ones, and allow unhelpful ones to fade through steady self-awareness and practice.
- Key issues: overthinking/stress; acceptance-based thought observation; accessible secular wellbeing education.
- Policy angle: optional, inclusive, evidence-informed wellbeing support, with access to counselling and no claim that meditation replaces care.

## Section 2 — Task selected
- Selected: Task 2, domain-specific fine-tuned LLM (SFT/QLoRA).
- Reason: directly matches LLM Engineering and permits a measurable model-adaptation experiment.
- Status: update honestly after running notebook.

## Section 3 — Feasible problem definition
Create a small reflective wellbeing assistant that answers beginner questions about mindfulness and thought observation in plain language. In scope: small instruction dataset, adapter fine-tuning attempt, and before/after qualitative test. Out of scope: clinical diagnosis, therapy, claims of clinical effectiveness, large-scale validated evaluation, and deployment to real users.
- Users: learners and the general public seeking basic wellbeing education.
- Success check: notebook runs; model generates answers before/after; limitations are documented.

## Section 4 — Preparation
Only tick items you actually did. If preparation happened during the exam, do not describe it as completed beforehand.
- Base model shortlisted: Qwen/Qwen2.5-0.5B-Instruct (0.5B parameters).
- Dataset: `data/mindfulness_instructions.jsonl`, 20 instruction-response examples, JSONL.
- Notebook: Hugging Face Transformers + PEFT, 4-bit NF4 if compatible, Colab GPU.
- Record whether you tested Colab/GitHub/AI coding assistant before the session.

## Section 5 — Technology stack
- Base model: Qwen/Qwen2.5-0.5B-Instruct, 0.5B parameters.
- Dataset: 20 curated instruction/response pairs inspired by the article's themes; small demonstration dataset, not a clinical corpus.
- Quantization: 4-bit NF4 with double quantization where supported.
- LoRA: r=8, alpha=16, dropout=0.05; target modules in notebook.
- Training: short run; report actual steps, batch size, learning rate and GPU.
- Libraries: torch, transformers, datasets, peft, bitsandbytes, accelerate.
- Principles: small trial run, relevant/clean examples, baseline-vs-adapted comparison, separation of data/training/evaluation, safety boundary.

## Section 6 — Issues
Record actual error, likely cause, action taken and status. Possible issues include unavailable GPU, package incompatibility, model download time, CUDA out-of-memory, or adapter save failure. Do not copy an issue you did not encounter.

## Section 7 — Deliverables
- GitHub repository URL: fill in after creating repo.
- Notebook: `notebooks/mindfulai_qlora_colab.ipynb`
- Dataset: `data/mindfulness_instructions.jsonl`
- Screenshots: upload actual Colab training/output screenshots.
- Model/adapter: only list if actually saved and uploaded.
- Output achieved: describe what an examiner can reproduce. A notebook that is prepared but not run is not a completed fine-tuning result.
