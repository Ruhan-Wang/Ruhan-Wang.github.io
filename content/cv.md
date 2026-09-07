📄 **[Download Full CV (PDF)](/main_LLM.pdf)** — *Last updated: September 2026*

---

## Professional Profile

Computer Engineering Ph.D. working on **long-horizon LLM agents, self-evolving agent harnesses, reinforcement learning for LLMs, and scalable post-training**. Experienced in RLVR, policy optimization, and improving RL training efficiency. I build self-evolving agents that use tools, interact with environments, complete long-horizon tasks, and improve through execution feedback. My research has been published at leading conferences and journals, including ICML, ICLR, COLM, and TMLR.

## Education

**Indiana University**, Ph.D. in Computer Engineering, *Aug. 2022 – Feb. 2027 (expected)*\
Bloomington, IN

**Indiana University**, M.S. in Computer Engineering, *Aug. 2022 – Dec. 2024*\
Bloomington, IN

## Core Expertise

- **Agentic RL, Evals & Environments:** Tool-using terminal agents; long-horizon execution; agent environments and runtime harnesses; evals, dense-reward graders, and reward signals; multi-agent coordination; failure and model-behavior analysis.
- **LLM Post-Training & RL:** RLVR and policy optimization with GRPO and W-REINFORCE; verifiable rewards; dynamic batch scheduling; reasoning optimization; training-signal and model-behavior analysis.
- **Scalable Training & Systems:** Python, PyTorch, Hugging Face Transformers, veRL, vLLM, Ray, and DeepSpeed; distributed multi-GPU training and inference; Docker, Apptainer, Slurm, and GPU clusters.

## Experience

### Tencent AI Lab · Hunyuan Frontier Lab
**Ph.D. Research Intern · Agentic Reinforcement Learning; Self-Evolving Agents**, *May 2026 – Present*\
Bellevue, WA

- **Long-horizon agent harness interpretability:** Introduced the [Harness Handbook](https://arxiv.org/abs/2607.13285), a behavior-centric representation that maps high-level system behaviors to concrete implementation sites, making complex agent harnesses easier to navigate, audit, and modify.
- **Self-evolving long-horizon agent harnesses:** Built an execution-feedback loop that identifies failures, proposes harness changes, and validates their effects, enabling iterative improvement from observed agent behavior.
- **Long-horizon agent evaluation:** Co-developed [Long-Horizon-Terminal-Bench](https://arxiv.org/abs/2607.08964), a benchmark of 46 tasks across nine categories, and evaluated 15 frontier models on runs averaging 9.9M tokens, 231 episodes, and 85.3 minutes.
- **Long-horizon agent task synthesis:** Co-developed [Recursive Synthetic Terminal Tasks](https://arxiv.org/abs/2608.05466), a framework that recursively generates and validates long-horizon tasks in fresh sandboxes, producing 37,484 verified tasks across 15 rounds at approximately $0.05 per task. Agentic PPO on the synthesized data improved Qwen3.5-27B by 20.0%, 41.2%, and 21.9% on Terminal-Bench 2, Terminal-Bench Hard, and Long-Horizon Terminal Bench.
- **Long-horizon terminal-agent RL:** Co-developed T1, a 122B Mixture-of-Experts agent post-trained with reinforcement learning for real-shell tasks of more than 300 tool-call turns. Dense process rewards and TITO/R3 training-inference alignment raised the Terminal-Bench 2.1 resolved rate from 43.8% to 64.0% and surpassed Gemini 3.1 Pro and GLM 5.1 on Long-Horizon Terminal Bench.

### Indiana University · Machine Learning Lab
**Graduate Researcher**, *Aug. 2023 – Present*\
Advisor: [Prof. Dongruo Zhou](https://sites.google.com/view/drzhou) · Bloomington, IN

- **Efficient RLVR:** Identified sparse gradient signals in LLM reinforcement learning and developed dynamic batch scheduling, reducing optimizer updates by up to 79% and wall-clock time by 9.3% while preserving Pass@k across three LLMs, four benchmarks, and three RL algorithms.
- **Federated LLM reasoning:** Developed FERA to combine reasoning from distributed LLMs without training, outperforming baselines on MMLU-Pro, AQUA-RAT, and GSM8K while using approximately 88% fewer FLOPs than FedAvg and 64% fewer than FLoRA.
- **Collaborative LLM agents:** Developed [Fed-ICL](https://github.com/Ruhan-Wang/Fed_ICL) to improve answers without sharing model parameters or raw data, increasing MMLU accuracy by up to 11% and TruthfulQA BERTScore by up to 8% while converging in 40% to 88% fewer rounds than FedAvg.
- **Multimodal agentic recommendation:** Designed an architecture that integrates user profiles, memory, planning, actions, multi-agent collaboration, and interactive user simulation, and identified seven open challenges for next-generation systems.
- **Offline and safe RL:** Developed RADT for policy transfer across changing dynamics and CQDT for trajectory stitching under safety constraints, with theoretical guarantees and evaluations on D4RL and safe offline RL benchmarks.

### Mitsubishi Electric Research Laboratories
**Ph.D. Research Intern · Generative AI**, *May 2024 – Aug. 2024*\
Cambridge, MA

- **Generative AI for few-shot learning:** Developed three label-guided quantum diffusion algorithms that achieved 79.5% mean accuracy, a 17.3% relative improvement over the strongest QNN baseline across 12 tasks; validated them on noisy IBM Almaden hardware, leading to publications at ICAD 2025 and the AAAI QCAI Workshop.

## Selected Publications

### Agentic AI & LLM Post-Training

1. Junyao Yang, Yucheng Shi, **Ruhan Wang**, et al. “T1: Terminal Agent Reinforcement Learning for Long-Horizon Tasks.” 2026.
2. **Ruhan Wang**, Kishan Panaganti, and Dongruo Zhou. “More Memory, Worse Agents: Error Reproduction and Anti-Persistence in LLM Agents.” *Under review at NeurIPS 2026*.
3. Yue Yu, Runze Zhao, **Ruhan Wang**, et al. “Computationally Efficient Reinforcement Learning with Verifiable Rewards via Dynamic Batch Scheduling.” *Under review at NeurIPS 2026*.
4. **Ruhan Wang** et al. “[Harness Handbook: Making Evolving Agent Harnesses Readable, Navigable, and Editable](https://arxiv.org/abs/2607.13285).” *arXiv:2607.13285*, 2026.
5. Zongxia Li et al. “[Long-Horizon-Terminal-Bench: Testing the Limits of Agents on Long-Horizon Terminal Tasks with Dense Reward-Based Grading](https://arxiv.org/abs/2607.08964).” *arXiv:2607.08964*, 2026.
6. Junyao Yang et al. “[Stale but Stable: Staleness-Adaptive Trust Regions for Stabilizing Asynchronous Reinforcement Learning](https://arxiv.org/abs/2607.18722).” *arXiv:2607.18722*, 2026.
7. Zhongzhi Li et al. “[Recursive Synthesis for Long-Horizon Terminal Tasks](https://arxiv.org/abs/2608.05466).” *arXiv:2608.05466*, 2026.

### Collaborative & Multimodal LLMs

1. **Ruhan Wang** et al. “[FERA: Uncertainty-Aware Federated Reasoning for Large Language Models](https://arxiv.org/abs/2605.10082).” *COLM 2026*.
2. **Ruhan Wang** et al. “[Federated In-Context Learning: Iterative Refinement for Improved Answer Quality](https://icml.cc/virtual/2025/poster/45173).” *ICML 2025*.
3. Chengkai Huang et al. “[Towards Agentic Recommender Systems in the Era of Multimodal Large Language Models](https://arxiv.org/abs/2503.16734).” *ACM TIST*, 2025.

### Reinforcement Learning & Efficient AI

1. Runze Zhao et al. “[Instance-Dependent Continuous-Time Reinforcement Learning via Maximum Likelihood Estimation](https://arxiv.org/abs/2508.02103).” *ICML 2026*.
2. Zhishuai Liu et al. “[How to Provably Improve Return Conditioned Supervised Learning?](https://arxiv.org/abs/2506.08463).” *Under review at NeurIPS 2026*.
3. **Ruhan Wang** et al. “[Return Augmented Decision Transformer for Off-Dynamics Reinforcement Learning](https://arxiv.org/abs/2410.23450).” *TMLR*, 2025.
4. **Ruhan Wang** and Dongruo Zhou. “[Safe Decision Transformer with Learning-Based Constraints](https://proceedings.mlr.press/v283/wang25a.html).” *L4DC 2025; NeurIPS Safe Generative AI Workshop 2024*.
5. Ahmad Faiz et al. “[LLMCarbon: Modeling the End-to-End Carbon Footprint of Large Language Models](https://arxiv.org/abs/2309.14393).” *ICLR 2024 (Oral)*.

### Quantum Computing

1. **Ruhan Wang**, Philip Richerme, and Fan Chen. “A Hybrid Quantum-Classical Neural Network for Learning Transferable Visual Representation.” *Quantum Science and Technology*, 2023.
2. **Ruhan Wang**, Fahiz Baba-Yara, and Fan Chen. “JustQ: Automated Deployment of Fair and Accurate Quantum Neural Networks.” *ASP-DAC 2024*.
3. **Ruhan Wang**, Ye Wang, Jing Liu, and Toshiaki Koike-Akino. “Quantum Diffusion Models for Few-Shot Learning.” *ICAD 2025*.

## Professional Recognition & Service

- **Conference reviewing:** ICML (2025, 2026; **Gold Reviewer**, 2026), NeurIPS (2025, 2026), AAAI (2025, 2026, 2027), and ICLR (2026, 2027; **Top 25% Reviewer**, 2026).
- **Journal reviewing:** *Measurement Science and Technology* and *Transactions on Machine Learning Research (TMLR)*.
- **Teaching:** Reinforcement Learning for LLMs (Spring 2026); Principles of Machine Learning (Spring 2025); Data Mining (Fall 2024, Fall 2025); Engineering Cloud Computing (Spring 2024); Deep Learning Architecture and Hardware Acceleration (Fall 2023).

