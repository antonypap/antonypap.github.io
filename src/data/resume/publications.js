const publications = [
  {
    name: 'Incentivising Participation with Exclusionary Sanctions',
    releaseDate: '2023-05-29',
    venue: 'International Workshop on Coordination, Organizations, Institutions, Norms, and Ethics for Governance of Multi-Agent Systems (COINE) (AAMAS)',
    journal: 'Lecture Notes in Computer Science (vol 14002)',
    publisher: 'Springer',
    url: 'https://doi.org/10.1007/978-3-031-49133-7_3',
    citation: 'Blackledge, B. et al. (2023). Incentivising Participation with Exclusionary Sanctions (Full). In: Fornara, N., Cheriyan, J., Mertzani, A. (eds) Coordination, Organizations, Institutions, Norms, and Ethics for Governance of Multi-Agent Systems XVI. COINE 2023. Lecture Notes in Computer Science(), vol 14002. Springer, Cham. https://doi.org/10.1007/978-3-031-49133-7_3',
    summary: 'Some cooperative survival situations require all members of a group to participate equally in collective action; however, if the only sanction for non-participatory free-riding is exclusion, then it can be ineffective, as exclusion is indistinguishable from non-participation. The question then is: how does a group, that can define a set of mutually agreed conventional rules, incentivise participation that supports collective survival when the only sanctioning instrument is exclusion. This problem is investigated in this paper through the design and implementation of a self-organising multi-agent simulator for an iterated cooperative survival game. A series of experiments, or "survival trials", is run for three different sanctioning schemes: fixed-length, dynamic-length and graduated-length exclusion. Results show that graduated sanctions outperform the alternatives, which can be either too weak or too strong. We conclude by arguing that these results provide evidence for why graduated sanctions are the basis for one of the principles of self-governing institutions.',
  },
  {
    name: 'Deep learning techniques for in-core perturbation identification and localization of time-series nuclear plant measurements',
    releaseDate: '2022-08-22',
    journal: 'Annals of Nuclear Energy',
    publisher: 'Elsevier',
    url: 'https://doi.org/10.1016/j.anucene.2022.109373',
    citation: 'Papaoikonomou, A., Wingate, J., Verma, V., Durrant, A. M., Ioannou, G., Papagiannis, T., Yu, M., Alexandridis, G., Dokhane, A., Leontidis, G., Kollias, S., & Stafylopatis, A. (2022). Deep learning techniques for in-core perturbation identification and localization of time-series nuclear plant measurements. Annals of Nuclear Energy, 178, [109373]. https://doi.org/10.1016/j.anucene.2022.109373',
    summary: 'The use of machine learning in the field of reactor safety and noise diagnostics has recently seen great potential given the advancements made in computational tools, hardware and noise simulations. In this work we demonstrate how deep neural networks, specifically recurrent and convolutional neural networks can be trained in a synthetic setting and aligned to operate on real plant measurements to recover perturbation type and origin location from time-series signals. We first utilize the vast quantities of synthetic data generated from the extended SIMULATE-3K codes, simulating a Swiss 3-loop pre-KONVOI reactor to train our networks under a variety of differing perturbation settings. Additionally, we extend these approaches to operate in the setting of unsupervised real plant measurements, where information about the true perturbation characteristics is unknown. As such, we show the applicability of a self-supervised domain adaptation approach to correctly align the representations learned by the neural network between both the synthetic and real detector readings to more concretely classify and localize perturbation. We validate our approaches under a number of experimental analyses showing successful performance in both simulated and synthetic domains.',
    keywords: 'Convolutional neural networks; Recurrent neural networks; Deep learning; Perturbation identification; Perturbation localization; SIMULATE-3K; Self-supervised domain adaptation',
  },
];

export default publications;
