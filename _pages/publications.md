---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="https://scholar.google.com/citations?user=XfIWfBcAAAAJ">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

> '#' as (co-)first authorship, '*' as corresponding author.

<h1>Content</h1>

[Chemical Language Models](#1)  

[Generative Models in Drug Design](#2)  

[Virtual Screening or Molecular Dynamics](#3)

<p id="1"></p> 

<h2>📋 Chemical Language Models</h2>

* **Token-Mol 1.0: Tokenized drug design with large language model**

![](/images/Token-Mol.jpg)  

  Jike Wang<sup>#</sup>, **Rui Qin<sup>#</sup>**, Mingyang Wang<sup>#</sup>, Meijing Fang, Yangyang Zhang, Yuchen Zhu, Qun Su, Qiaolin Gou, Chao Shen, Odin Zhang, Zhenxing Wu, Dejun Jiang, Xujun Zhang, Huifeng Zhao, Jingxuan Ge, Zhourui Wu, Yu Kang\*, Chang-Yu Hsieh\*, Tingjun Hou\*  
    ***Nature Communications*, Under review. 2024**  
    [arXiv](https://arxiv.org/abs/2407.07930) | [code](https://github.com/jkwang93/Token-Mol)  

* **3D Molecular Pocket-based Generation with Token-only Large Language Model**

![](/images/3DSMILESGPT.png)  

  Jike Wang<sup>#</sup>, Hao Luo<sup>#</sup>, **Rui Qin<sup>#</sup>**, Mingyang Wang, Meijing Fang, Odin Zhang, Qiaolin Gou, Qun Su, Chao Shen, Ziyi You, Xiaozhe Wan, Liwei Liu\*, Chang-Yu Hsieh\*, Tingjun Hou\*, Yu Kang\*  
    ***Nature Machine Intelligence*, Submitted. 2024**  
    [ChemRxiv](http://dx.doi.org/10.26434/chemrxiv-2024-0ckgt) | [code](https://github.com/ashipiling/GPT_3DSMILES)

<p id="2"></p> 

<h2>📋 Generative Models in Drug Design</h2>

* **Deep Learning-based Design and Screening of Benzimidazole-pyrazine Derivatives as Adenosine A<sub>2B</sub> Receptor Antagonists**

![](/images/tbsd_a_2295974_uf0001_c.jpg)  

  **Rui Qin<sup>#</sup>**, Hao Zhang, Weifeng Huang, Zhenglin Shao, Jinping Lei\*  
  ***Journal of Biomolecular Structure & Dynamics*. 2023**  
  [Paper](http://dx.doi.org/10.1080/07391102.2023.2295974) | [code](https://github.com/sorui-qin/A2BAR_Antagonists_Design)    

<p id="3"></p> 

<h2>📋 Virtual Screening or Molecular Dynamics</h2>

* **Discovery of Novel Benzo[4,5]imidazo[1,2-a]pyrazin-1-amine-3-amide-one Derivatives as Anticancer Human A<sub>2A</sub> Adenosine Receptor Antagonists**

![](/images/images_medium_jm2c00101_0015.gif)  

Shuhao Liu<sup>#</sup>, Wen Ding<sup>#</sup>, Weifeng Huang<sup>#</sup>, Zhijing Zhang, Yinfeng Guo, Qiyi Zhang, Linna Wu, Yukai Li, **Rui Qin**, Jiahao Li, Taoda Shi\*, Xiaolei Zhang\*, Jinping Lei\*, Wenhao Hu\*  
  ***Journal of Medicinal Chemistry*. 65(13), 8933–8947. 2022**  
  [Paper](https://doi.org/10.1021/acs.jmedchem.2c00101)

