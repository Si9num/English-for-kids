import "../index.css";

const header = ` 
<header>
<div class="controls">
  <div class="list-img"></div>
  <label class="toggle">
    <input class="toggle-check" type="checkbox" checked />
    <span class="dot"></span>
    <p class="status" >Train</p>
    <p class="status-play" >Play</p>
    </label>
</div>

<nav class="list">
<div class="line"></div>
  <ul>
    <li class = 'mainPage'>Main Page</li>
    <li class ="ActionA">Action (set A)</li>
    <li class ="ActionB">Action (set B)</li>
    <li class ="Appliances">Appliances</li>
    <li class='parts'>Body parts</li>
    <li class ="AnimalA">Animal (set A)</li>
    <li class ="AnimalB">Animal (set B)</li>
    <li class ="Clothes">Clothes</li>
    <li class ="Emotions">Emotion</li>
    <li class ="Statistic">Statistic</li>
  </ul>
</nav>

</header>
<div class = "win">
<p>Congratulations! You win</p>
</div>
<div class = "lose">
</div>
<div class="cat-row-cont">
<div class='cat-row'></div>
</div>
<main id = 'main'>
</main>
<footer class="footer">
<a class="git" href="https://github.com/Si9num" >Github</a>
<a class="rss" href="https://rs.school/js/">
    <span class="rss-year">'21</span>
</a>
</footer>`;
export default header;
