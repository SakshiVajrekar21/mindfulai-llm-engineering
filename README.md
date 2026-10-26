# MindfulAI — Assignment H (LLM Engineering)

## Problem definition
Build a small reflective wellbeing assistant that explains mindfulness, meditation, self-awareness, and thought observation in plain language, inspired by the article **“Let Mind Think And You Simply Be”** (TOI SpeakingTree). This is a learning prototype, not a therapist or diagnostic tool.

## Scope
- Domain-specific instruction dataset (20 curated examples)
- QLoRA/LoRA fine-tuning notebook for a small open instruction model on Google Colab GPU
- Before/after evaluation using the same prompts
- Safety boundaries and limitations documented

## Repository structure
- `data/mindfulness_instructions.jsonl` — instruction/response pairs
- `notebooks/mindfulai_qlora_colab.ipynb` — training and evaluation notebook
- `outputs/` — add screenshots and generated sample outputs here
- `REPORT_NOTES.md` — answer-book notes you can adapt honestly

## Run
1. Open the notebook in Google Colab.
2. Select **Runtime → Change runtime type → T4 GPU** (if available).
3. Run cells from top to bottom. The notebook uses a small model and a small dataset to keep the run practical.
4. Download the trained adapter if the run completes. Do not claim a trained model exists unless the notebook completed.
5. Commit the notebook, dataset, outputs/screenshots, and notes to GitHub.

## Technology stack
Python, Google Colab, PyTorch, Hugging Face Transformers, Datasets, PEFT, bitsandbytes, Accelerate, Qwen2.5-0.5B-Instruct (open base model), 4-bit NF4 quantization, LoRA adapter.

## Design principles
- **Small iterations:** test model loading and baseline prompts before training.
- **DRY:** keep examples in one JSONL dataset and reuse a prompt formatter.
- **Orthogonality:** data, training, evaluation, and documentation are separated.
- **Documentation:** record model, dataset size, compute, limitations, and failures.
- **Safety:** general education only; no diagnosis or therapy claims; recommend professional support for persistent or severe distress.

## Important
The dataset is a small, manually curated demonstration set. It is not a validated clinical dataset and may not improve every answer. Report actual GPU type, runtime, memory and results from your own run; do not invent metrics.
