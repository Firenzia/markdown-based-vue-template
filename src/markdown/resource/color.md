# 颜色

颜色是产品视觉表现的基石，它帮助我们在品牌表现与产品功能之间创造一致的体验。在使用颜色之前应该充分理解颜色的组合方式以及喻义，以此保证产品中的颜色能够帮助用户清楚地感知信息，并指导他们的行为。


### 主色

主色调是基于品牌颜色衍生而来。主色蓝以及主色红大量应用在产品界面上，是展示交互，状态、反馈等信息最直观的方式。一般而言，主色蓝主要用于操作按钮等具有“确定”意义的组件上，另外也是用在部分的体现品牌风格的元素上。而主色红兼“优惠”和“警示”的寓意，电商场景下的大部分促销优惠信息通过主色红来引起用户的视觉感知，而部分具有不可逆操作或者严重后果的操作行为应该用主色红明确表示。

<style>
  .color-item {
    width: 220px;
    height: 194px;
    border-radius: 2px;
    margin-right: 20px;
    margin-bottom: 20px;
    display: inline-block;
  }
  .color-block {
    width: 100%;
    height: 120px;
    border-radius: 4px 4px 0 0;
    box-sizing: border-box;
    padding-top: 65px;
    padding-left: 20px;
  }
  .color-block p {
    margin-bottom: 0;
    line-height: 20px;
    color: #FFFFFF;
  }
  .color-desc {
    box-sizing: border-box;
    padding: 15px 20px;
    line-height: 20px;
    font-size: 12px;
    border: 1px solid #E5E8ED;
  }
  .color-desc p {
    margin-bottom: 0;
  }
  .bg-blue {
    background-color: #3B9BFF;
  }
  .bg-pink {
    background-color: #FE4979;
  }
  .bg-blue-s80 {
    background-color: #D8EBFF;
  }
  .bg-blue-s32 {
    background-color: #7ABBFF;
  }
  .bg-blue-o16 {
    background-color: #328BFF;
  }
  .bg-blue-o48 {
    background-color: #1E6BFF;
  }
  .bg-pink-s80 {
    background-color: #FFDBE4;
  }
  .bg-pink-s32 {
    background-color: #FE83A4;
  }
  .bg-pink-o16 {
    background-color: #FE3D66;
  }
  .bg-pink-o48 {
    background-color: #FE263F;
  }
  .bg-fog-gray {
    background-color: #25324E;
  }
  .bg-moon-blue {
    background-color: #165198;
  }
  .bg-fog-gray-64 {
    background-color: #737C8E;
  }
  .bg-fog-gray-48 {
    background-color: #969DAA;
  }
  .bg-fog-gray-32 {
    background-color: #B9BDC6;
  }
  .bg-fog-gray-16 {
    background-color: #DCDEE3;
  }
  .bg-moon-blue-64 {
    background-color: #6A90BD;
  }
  .bg-moon-blue-48 {
    background-color: #8FABCE;
  }
  .bg-moon-blue-32 {
    background-color: #B4C7DE;
  }
  .bg-moon-blue-16 {
    background-color: #DAE3EF;
  }
  .bg-component-gray {
    background-color: #747B8D;
  }
  .bg-notice-yellow {
    background-color: #F7B448;
  }
  .bg-component-gray-48 {
    background-color: #3C4056;
  }
  .bg-component-gray-16 {
    background-color: #61677B;
  }
  .bg-component-gray-32 {
    background-color: #A0A5B1;
  }
  .bg-component-gray-80 {
    background-color: #E3E5E8;
  }
  .bg-notice-yellow-48 {
    background-color: #F39025;
  }
  .bg-notice-yellow-16 {
    background-color: #F6A83C;
  }
  .bg-notice-yellow-32 {
    background-color: #FACC83;
  }
  .bg-notice-yellow-80 {
    background-color: #FDF0DA;
  }
  .bg-cyan-gray {
    background-color: #F5F7F6;
  }
  .bg-blue-gray {
    background-color: #ECF4FB;
  }
  .bg-outside-divider {
    background-color: #DADEE6;
  }
  .bg-inside-divider {
    background-color: #E5E8ED;
  }
  .bg-cyan-gray p,
  .bg-blue-gray p,
  .bg-outside-divider p,
  .bg-inside-divider p {
    color: #737C8E;
  }
  .color-download {
    width: 100%;
    height: 120px;
    box-sizing: border-box;
    padding: 5px 30px 0 30px;
    background: #F5F7F6;
    border: 1px solid #E5E8ED;
    border-radius: 4px;
    margin: 24px 0;
  }
  .color-download-link {
    float: right;
    margin-top: 35px;
    width: 80px;
    height: 40px;
    line-height: 40px;
    background: #3691FF!important;
    border-radius: 4px;
    text-align: center;
    color: #FFF!important;
  }
</style>
<div class="color-item">
  <div class="color-block bg-blue">
    <p>主色蓝</p>
    <p>Primary Blue</p>
  </div>
  <div class="color-desc">
    <p>#3B9BFF</p>
    <p>RBG:211,77,100</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-pink">
    <p>主色红</p>
    <p>Primary Red</p>
  </div>
  <div class="color-desc">
    <p>#FE4979</p>
    <p>RBG:344,71,100</p>
  </div>
</div>

### 辅助色

辅助色是指基于主色按固定的混合色法调整出来用于丰富组件的功能以及状态样式的一个色阶颜色组:详见调色板部分。每个辅助色色组包含了4个界面常用颜色，结合主色共5个色阶来混合使用，分别表示组件中的“未激活状态”、“一般状态”以及“按下状态”。

<div class="color-item">
  <div class="color-block bg-blue-s80">
    <p>主蓝色-S80%</p>
    <p>Primary Blue-S80%</p>
  </div>
  <div class="color-desc">
    <p>#D8EBFF</p>
    <p>RBG:216,235,255</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-blue-s32">
    <p>主蓝色-S32%</p>
    <p>Primary Blue-S32%</p>
  </div>
  <div class="color-desc">
    <p>#FE4979</p>
    <p>RBG:112,187,255</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-blue-o16">
    <p>主蓝色-O16%</p>
    <p>Primary Blue-O16%</p>
  </div>
  <div class="color-desc">
    <p>#328BFF</p>
    <p>RBG:50,139,255</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-blue-o48">
    <p>主蓝色-O48%</p>
    <p>Primary Blue-O48%</p>
  </div>
  <div class="color-desc">
    <p>#1E6BFF</p>
    <p>RBG:30,107,100</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-pink-s80">
    <p>主红色-S80%</p>
    <p>Primary Red-S80%</p>
  </div>
  <div class="color-desc">
    <p>#FFDBE4</p>
    <p>RBG:255,219,228</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-pink-s32">
    <p>主红色-S32%</p>
    <p>Primary Red-S32%</p>
  </div>
  <div class="color-desc">
    <p>#FE83A4</p>
    <p>RBG:254,71,100</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-pink-o16">
    <p>主红色-O16%</p>
    <p>Primary Red-O16%</p>
  </div>
  <div class="color-desc">
    <p>#FE3D66</p>
    <p>RBG:254,61,102</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-pink-o48">
    <p>主红色-O48%</p>
    <p>Primary Red-O48%</p>
  </div>
  <div class="color-desc">
    <p>#FE263F</p>
    <p>RBG:254,38,63</p>
  </div>
</div>


### 文本色

产品界面的文本有两种，分别是“雾雨”和“月夜”。（具体使用方法见文本）“雾雨”和“月夜”同样有4个不同明度的扩展颜色，详见“调色板”部分，用于表现特定界面中的不同信息层级，谨慎合理地使用文本色是帮助用户快速感知信息的重要方法。

<div class="color-item">
  <div class="color-block bg-fog-gray">
    <p>雾雨</p>
    <p>FogGray</p>
  </div>
  <div class="color-desc">
    <p>#25324E</p>
    <p>RBG:37,50,78</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-moon-blue">
    <p>月夜</p>
    <p>MoonBlue</p>
  </div>
  <div class="color-desc">
    <p>#165198</p>
    <p>RBG:22,87,152</p>
  </div>
</div>
<br>

<div class="color-item">
  <div class="color-block bg-fog-gray-64">
    <p>雾雨-64%</p>
    <p>FogGray-64%</p>
  </div>
  <div class="color-desc">
    <p>#737C8E</p>
    <p>RBG:115,124,142</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-fog-gray-48">
    <p>雾雨-48%</p>
    <p>FogGray-48%</p>
  </div>
  <div class="color-desc">
    <p>#969DAA</p>
    <p>RBG:150,157,170</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-fog-gray-32">
    <p>雾雨-32%</p>
    <p>FogGray-32%</p>
  </div>
  <div class="color-desc">
    <p>#B9BDC6</p>
    <p>RBG:185,189,198</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-fog-gray-16">
    <p>雾雨-16%</p>
    <p>FogGray-16%</p>
  </div>
  <div class="color-desc">
    <p>#DCDEE3</p>
    <p>RBG:220,222,227</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-moon-blue-64">
    <p>月夜-64%</p>
    <p>MoonBlue-64%</p>
  </div>
  <div class="color-desc">
    <p>#6A90BD</p>
    <p>RBG:106,144,189</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-moon-blue-48">
    <p>月夜-48%</p>
    <p>MoonBlue-48%</p>
  </div>
  <div class="color-desc">
    <p>#8FABCE</p>
    <p>RBG:143,171,206</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-moon-blue-32">
    <p>月夜-32%</p>
    <p>MoonBlue-32%</p>
  </div>
  <div class="color-desc">
    <p>#B4C7DE</p>
    <p>RBG:180,199,222</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-moon-blue-16">
    <p>月夜-16%</p>
    <p>MoonBlue-16%</p>
  </div>
  <div class="color-desc">
    <p>#DAE3EF</p>
    <p>RBG:218,227,239</p>
  </div>
</div>


### 组件色

组件色一般应用在产品界面常规性质的组件元素，包括用于用于线框图标以及其他采用组件的“组件灰”以及带有提示语义的用于通知信息的“提示黄”。

<div class="color-item">
  <div class="color-block bg-component-gray">
    <p>组件灰</p>
    <p>ComponentGray</p>
  </div>
  <div class="color-desc">
    <p>#747B8D</p>
    <p>RBG:37,50,78</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-notice-yellow">
    <p>提示黄</p>
    <p>NoticeYellow</p>
  </div>
  <div class="color-desc">
    <p>#F7B448</p>
    <p>RBG:247,180,72</p>
  </div>
</div>
<br>

<div class="color-item">
  <div class="color-block bg-component-gray-48">
    <p>组件灰-O48%</p>
    <p>ComponentGray-O48%</p>
  </div>
  <div class="color-desc">
    <p>#3C4056</p>
    <p>RBG:60,64,86</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-component-gray-16">
    <p>组件灰-O16%</p>
    <p>ComponentGray-O16%</p>
  </div>
  <div class="color-desc">
    <p>#61677B</p>
    <p>RBG:97,103,123</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-component-gray-32">
    <p>组件灰-S32%</p>
    <p>ComponentGray-S32%</p>
  </div>
  <div class="color-desc">
    <p>#A0A5B1</p>
    <p>RBG:160,165,177</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-component-gray-80">
    <p>组件灰-S80%</p>
    <p>ComponentGray-S80%</p>
  </div>
  <div class="color-desc">
    <p>#E3E5E8</p>
    <p>RBG:227,229,232</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-notice-yellow-48">
    <p>提示黄-O48%</p>
    <p>NoticeYellow-O48%</p>
  </div>
  <div class="color-desc">
    <p>#F39025</p>
    <p>RBG:243,144,37</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-notice-yellow-16">
    <p>提示黄-O16%</p>
    <p>NoticeYellow-O16%</p>
  </div>
  <div class="color-desc">
    <p>#F6A83C</p>
    <p>RBG:246,168,60</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-notice-yellow-32">
    <p>提示黄-S32%</p>
    <p>NoticeYellow-S32%</p>
  </div>
  <div class="color-desc">
    <p>#FACC83</p>
    <p>RBG:250,204,131</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-notice-yellow-80">
    <p>提示黄-S80%</p>
    <p>NoticeYellow-S80%</p>
  </div>
  <div class="color-desc">
    <p>#FDF0DA</p>
    <p>RBG:253,240,218</p>
  </div>
</div>

### 背景色

背景色包括用于一般表单的背景的“青灰”、用于金额信息的背景的“蓝灰”，请勿不要把背景色用于其他用途。

<div class="color-item">
  <div class="color-block bg-cyan-gray">
    <p>青灰色</p>
    <p>CyanGray</p>
  </div>
  <div class="color-desc">
    <p>#F5F7F6</p>
    <p>RBG:245,247,246</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-blue-gray">
    <p>蓝灰色</p>
    <p>BlueGray</p>
  </div>
  <div class="color-desc">
    <p>#ECF4FB</p>
    <p>RBG:236,244,251</p>
  </div>
</div>

### 分割线色

分割线色包括用于模块之间的分割的“外分割线色”、用于模块内部的分割的“内分割线色”。（详细用法请查阅分割线）

<div class="color-item">
  <div class="color-block bg-outside-divider">
    <p>外分割线色</p>
    <p>OutsideDividerGray</p>
  </div>
  <div class="color-desc">
    <p>#DADEE6</p>
    <p>RBG:218,222,230</p>
  </div>
</div>

<div class="color-item">
  <div class="color-block bg-inside-divider">
    <p>内分割线色</p>
    <p>InsideDividerGray</p>
  </div>
  <div class="color-desc">
    <p>#E5E8ED</p>
    <p>RBG:229,232,237</p>
  </div>
</div>


# 调色板

由于产品的复杂性，仅依靠上面的颜色是难以满足现实的业务需求，另外方面，随意定义的颜色容易导致设计师与开发人员之间产生混乱。因此，我们需要通过固定的颜色混合函数来制定调色板，以此来丰富产品的色彩应用范围。颜色混合函数包括以下三种：变亮（Screen）、叠加（Overlay）、不透明度（Opacity）。其中变亮与叠加混合函数主要应用在主色和组件色的颜色扩展，不透明度主要应用在文本色的层级表现。

### 变亮混合

主色和组件色通过以Screen的混合模式叠加不透明度单位变量为4%的白色，扩展出其他颜色



# 配色原则

### 遵循颜色的固有属性

产品界面上所用到的颜色都有其固有的属性，统一的属性对于用户认知起到非常重要的作用，例如，我们通过一个主色蓝的按钮来让用户确定一系列的操作，通过主色红来提示商品的优惠信息。

### 确保颜色的可用性

我们经常使用颜色与图形、文本等元素结合使用，需要注意在视觉上（如文本信息的层级、主次按钮差异）对于内容元素的类型区分，确保不同内容元素的可用性和可读性。