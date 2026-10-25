📄 **[Download Full CV (PDF)](/main_LLM.pdf)** — *Last updated: October 2026*

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
**Full-Time Researcher · Agentic Reinforcement Learning; Self-Evolving Agents**, *May 2026 – Present*\
Bellevue, WA

- **Long-horizon agent harness interpretability:** Introduced the [Harness Handbook](https://arxiv.org/abs/2607.13285), a behavior-centric representation that maps high-level system behaviors to concrete implementation sites, making complex agent harnesses easier to navigate, audit, and modify.
- **Self-evolving long-horizon agent harnesses:** Developed RiseHarness, a model-specific framework that compares successful and failed runs, aligns runtime harness traces with agent trajectories and Harness Handbook mappings, and searches external designs to propose targeted harness changes. Repeated implementation checks and evaluations retain modifications that improve execution reliability without updating model weights.
- **Long-horizon agent evaluation:** Co-developed [Long-Horizon-Terminal-Bench](https://arxiv.org/abs/2607.08964), a benchmark spanning nine task categories with dense, process-level grading for evaluating frontier agents on extended terminal interactions.
- **Long-horizon agent task synthesis:** Co-developed [Recursive Synthetic Terminal Tasks](https://arxiv.org/abs/2608.05466), a framework that recursively generates and validates tasks in fresh sandboxes. Produced more than 37,000 verified tasks for agentic RL, improving performance across multiple terminal-agent benchmarks.
- **Scientific agent environment scaling:** Co-developed [software-in-the-loop reconstruction](https://arxiv.org/abs/2610.02710), which turns executable scientific workflows into self-supervised terminal tasks with hidden semantic verification. Built SWR from 500 workflows across 46 software families and six scientific domains.
- **Recursive trajectory self-improvement:** Co-developed [Recursive Self-Rewrite](https://arxiv.org/abs/2610.02826), which uses planner, critic, and executor roles to convert successful trajectories from specialized harnesses into verified demonstrations for a general harness. Expanded the training set from 2,001 source trajectories to more than 11,000 verified trajectories.
- **Long-horizon terminal-agent RL:** Co-developed [T1](https://arxiv.org/abs/2609.11042), a 122B Mixture-of-Experts agent post-trained with reinforcement learning for real-shell tasks requiring hundreds of tool interactions. Designed dense process rewards and TITO/R3 training-inference alignment to improve reliable long-horizon execution.
- **Recursive agent post-training:** Co-developed [Terminal-RSI](https://arxiv.org/abs/2610.22192), a self-improvement framework that alternates recursive trajectory rewriting with critic-inheriting policy refinement. Developed turn-boundary credit assignment and success-prioritized rewards for stable learning on long terminal tasks.

### Indiana University · Machine Learning Lab
**Graduate Researcher**, *Aug. 2023 – Present*\
Advisor: [Prof. Dongruo Zhou](https://sites.google.com/view/drzhou) · Bloomington, IN

- **Reliable memory-based agent self-improvement:** Identified error reproduction, where faulty stored abstractions shape later trajectories and regenerate errors through subsequent memory updates. Developed Anti-Persistence to retain execution experience while synthesizing task-specific guidance on demand, improving held-out success with the lowest average LLM-call cost among evaluated memory designs.
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

1. **Ruhan Wang**, Kishan Panaganti, and Dongruo Zhou. “[More Memory, Worse Agents: Error Reproduction and Anti-Persistence in LLM Agents](https://arxiv.org/abs/2610.27406).” *Under review at ICLR 2027*.
2. **Ruhan Wang**, Yucheng Shi, Zongxia Li, Zhongzhi Li, Yue Yu, Junyao Yang, Kishan Panaganti, Haitao Mi, Dongruo Zhou, and Leowei Liang. “[Harness Handbook: Making Evolving Agent Harnesses Readable, Navigable, and Editable](https://arxiv.org/abs/2607.13285).” *arXiv:2607.13285*, 2026.
3. **Ruhan Wang**, Yucheng Shi, Zongxia Li, Zhongzhi Li, Yue Yu, Junyao Yang, Kishan Panaganti, Haitao Mi, Dongruo Zhou, and Leowei Liang. “[Harness Self-Evolution for Long-Horizon Terminal Agents](https://arxiv.org/abs/2610.27435).” *Under review at ICLR 2027*.
4. Junyao Yang, Zongxia Li, Yucheng Shi, Zhongzhi Li, **Ruhan Wang**, Ruiwen Zhou, Haitao Mi, Shuicheng Yan, and Leowei Liang. “[Terminal-RSI: Recursive Self-Improving Terminal Agents via Recursive Self-Rewrite and Policy-Refine](https://arxiv.org/abs/2610.22192).” *arXiv:2610.22192*, 2026.
5. Zongxia Li, Yucheng Shi, Zhongzhi Li, Junyao Yang, **Ruhan Wang**, Chengsong Huang, Fuxiao Liu, Haitao Mi, Jordan Boyd-Graber, and Leowei Liang. “[Scaling Trajectories for Complex Tasks through Recursive Self-Rewrite](https://arxiv.org/abs/2610.02826).” *arXiv:2610.02826*, 2026.
6. Zhongzhi Li, Yucheng Shi, Zongxia Li, Junyao Yang, **Ruhan Wang**, Yu Wang, Jingyuan Huang, Jichao Yu, Ninghao Liu, Haitao Mi, and Leowei Liang. “[Self-Supervised Scaling of Terminal Environments for Scientific Domains](https://arxiv.org/abs/2610.02710).” *arXiv:2610.02710*, 2026.
7. Junyao Yang, Yucheng Shi, Zhongzhi Li, **Ruhan Wang**, Zongxia Li, Haitao Mi, and Leowei Liang. “[T1: Terminal Agent Reinforcement Learning for Long-Horizon Tasks](https://arxiv.org/abs/2609.11042).” *arXiv:2609.11042*, 2026.
8. Zongxia Li, Zhongzhi Li, Yucheng Shi, **Ruhan Wang**, Junyao Yang, Zhichao Liu, Xiyang Wu, Anhao Li, Yue Yu, Ninghao Liu, Lichao Sun, Haitao Mi, and Leowei Liang. “[Long-Horizon-Terminal-Bench: Testing the Limits of Agents on Long-Horizon Terminal Tasks with Dense Reward-Based Grading](https://arxiv.org/abs/2607.08964).” *arXiv:2607.08964*, 2026.
9. Junyao Yang, Yucheng Shi, Zongxia Li, Zhongzhi Li, **Ruhan Wang**, Xiangxin Zhou, Kishan Panaganti, Haitao Mi, and Leowei Liang. “[Stale but Stable: Staleness-Adaptive Trust Regions for Stabilizing Asynchronous Reinforcement Learning](https://arxiv.org/abs/2607.18722).” *arXiv:2607.18722*, 2026.
10. Zhongzhi Li, Yucheng Shi, Zongxia Li, **Ruhan Wang**, Anhao Li, Zixun Huang, Junyao Yang, Lei Ke, Ninghao Liu, Haitao Mi, and Leowei Liang. “[Recursive Synthesis for Long-Horizon Terminal Tasks](https://arxiv.org/abs/2608.05466).” *arXiv:2608.05466*, 2026.

### Collaborative & Multimodal LLMs

1. **Ruhan Wang**, Chengkai Huang, Zhiyong Wang, Junda Wu, Rui Wang, Tong Yu, Julian McAuley, Lina Yao, and Dongruo Zhou. “[FERA: Uncertainty-Aware Federated Reasoning for Large Language Models](https://arxiv.org/abs/2605.10082).” *COLM 2026*.
2. **Ruhan Wang**, Zhiyong Wang, Chengkai Huang, Rui Wang, Tong Yu, Lina Yao, John C. S. Lui, and Dongruo Zhou. “[Federated In-Context Learning: Iterative Refinement for Improved Answer Quality](https://icml.cc/virtual/2025/poster/45173).” *ICML 2025*.
3. Chengkai Huang, Junda Wu, Yu Xia, Sheldon Yu, **Ruhan Wang**, Tong Yu, Ruiyi Zhang, Ryan Rossi, Branislav Kveton, Dongruo Zhou, Julian McAuley, and Lina Yao. “[Towards Agentic Recommender Systems in the Era of Multimodal Large Language Models](https://arxiv.org/abs/2503.16734).” *ACM TIST*, 2025.

### Reinforcement Learning & Efficient AI

1. **Ruhan Wang**, Yu Yang, Zhishuai Liu, Dongruo Zhou, and Pan Xu. “[Return Augmented Decision Transformer for Off-Dynamics Reinforcement Learning](https://arxiv.org/abs/2410.23450).” *TMLR*, 2025.
2. **Ruhan Wang** and Dongruo Zhou. “[Safe Decision Transformer with Learning-Based Constraints](https://proceedings.mlr.press/v283/wang25a.html).” *L4DC 2025; NeurIPS Safe Generative AI Workshop 2024*.
3. Runze Zhao, Yue Yu, **Ruhan Wang**, Chunfeng Huang, and Dongruo Zhou. “[Instance-Dependent Continuous-Time Reinforcement Learning via Maximum Likelihood Estimation](https://arxiv.org/abs/2508.02103).” *ICML 2026*.
4. Zhishuai Liu, Yu Yang, **Ruhan Wang**, Pan Xu, and Dongruo Zhou. “[How to Provably Improve Return Conditioned Supervised Learning?](https://arxiv.org/abs/2506.08463).” *Under review at NeurIPS 2026*.
5. Ahmad Faiz, Sotaro Kaneda, **Ruhan Wang**, Rita Osi, Parteek Sharma, Fan Chen, and Lei Jiang. “[LLMCarbon: Modeling the End-to-End Carbon Footprint of Large Language Models](https://arxiv.org/abs/2309.14393).” *ICLR 2024 (Oral)*.

### Quantum Computing

1. **Ruhan Wang**, Philip Richerme, and Fan Chen. “[A Hybrid Quantum-Classical Neural Network for Learning Transferable Visual Representation](https://iopscience.iop.org/article/10.1088/2058-9565/acf1c7).” *Quantum Science and Technology*, 2023.
2. **Ruhan Wang**, Fahiz Baba-Yara, and Fan Chen. “[JustQ: Automated Deployment of Fair and Accurate Quantum Neural Networks](https://arxiv.org/abs/2403.11048).” *ASP-DAC 2024*.
3. **Ruhan Wang**, Ye Wang, Jing Liu, and Toshiaki Koike-Akino. “[Quantum Diffusion Models for Few-Shot Learning](https://arxiv.org/abs/2411.04217).” *ICAD 2025*.

## Professional Recognition & Service

- **Conference reviewing:** ICML (2025, 2026; **Gold Reviewer**, 2026), NeurIPS (2025, 2026), AAAI (2025, 2026, 2027), and ICLR (2026, 2027; **Top 25% Reviewer**, 2026).
- **Journal reviewing:** *Measurement Science and Technology* and *Transactions on Machine Learning Research (TMLR)*.
- **Teaching:** Reinforcement Learning for LLMs (Spring 2026); Principles of Machine Learning (Spring 2025); Data Mining (Fall 2024, Fall 2025); Engineering Cloud Computing (Spring 2024); Deep Learning Architecture and Hardware Acceleration (Fall 2023).

