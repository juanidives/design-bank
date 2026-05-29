(function(){
  /* === Icon bootstrap ===
     Lucide exposes window.lucide when loaded from the UMD build.
     We call createIcons() once eagerly and again after every DOM mutation
     that could introduce new data-lucide elements (tab switch, toast). */
  function initIcons(){
    if(window.lucide&&typeof window.lucide.createIcons==="function"){
      window.lucide.createIcons();
    }
  }
  /* Run immediately in case DOMContentLoaded already fired (scripts at bottom of body). */
  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",boot);
  }else{
    boot();
  }
  function boot(){
    initIcons();
    initTabs();
    initToast();
    initCopyButtons();
    initPlaygroundTabs();
    initCustomizers();
    initViewportSimulator();
    initAnimationSandbox();
    initTypoTester();
    initNavHighlight();
  }
  /* === Tab switching ===
     Toggles .active on buttons; .ds-hidden on content panels.
     All visual states are driven by CSS, not inline styles. */
  function initTabs(){
    var btns=document.querySelectorAll("[data-tab-target]");
    var panels=document.querySelectorAll("[data-tab-content]");
    btns.forEach(function(btn){
      btn.addEventListener("click",function(){
        var targetId=btn.getAttribute("data-tab-target");
        btns.forEach(function(b){b.classList.remove("active");});
        btn.classList.add("active");
        panels.forEach(function(panel){
          if(panel.id===targetId){
            panel.classList.remove("ds-hidden");
          }else{
            panel.classList.add("ds-hidden");
          }
        });
        /* refresh ScrollTrigger inside iframe if switching to preview tab */
        if(targetId==="landing-page-tab"){
          var iframe=document.getElementById("preview-iframe");
          if(iframe){
            try{
              var iw=iframe.contentWindow;
              if(iw&&iw.ScrollTrigger){iw.ScrollTrigger.refresh();}
            }catch(e){}
          }
        }
        /* re-render any new icons that entered the viewport */
        initIcons();
      });
    });
  }
  /* === Toast === */
  function initToast(){
    var toast=document.createElement("div");
    toast.id="ds-toast";
    toast.className="ds-toast";
    toast.innerHTML='<span id="ds-toast-msg">Copiado!</span>';
    document.body.appendChild(toast);
    window.dsShowToast=function(msg){
      var el=document.getElementById("ds-toast-msg");
      if(el)el.textContent=msg||"Copiado!";
      toast.classList.add("show");
      setTimeout(function(){toast.classList.remove("show");},2200);
    };
  }
  /* === Copy buttons (data-copy-text) === */
  function initCopyButtons(){
    document.querySelectorAll("[data-copy-text]").forEach(function(btn){
      btn.addEventListener("click",function(){
        var text=btn.getAttribute("data-copy-text");
        navigator.clipboard.writeText(text).then(function(){
          window.dsShowToast("Copiado: "+text.substring(0,28)+(text.length>28?"…":""));
        });
      });
    });
    document.querySelectorAll("[data-copy-code-target]").forEach(function(btn){
      btn.addEventListener("click",function(){
        var targetId=btn.getAttribute("data-copy-code-target");
        var codeEl=document.querySelector("[data-custom-code='"+targetId+"']");
        if(codeEl){
          navigator.clipboard.writeText(codeEl.textContent).then(function(){
            window.dsShowToast("Código HTML copiado!");
          });
        }
      });
    });
  }
  /* === Component playground tab switcher (Preview / Código HTML) === */
  function initPlaygroundTabs(){
    document.querySelectorAll("[data-pg-tab]").forEach(function(tabBtn){
      tabBtn.addEventListener("click",function(){
        var group=tabBtn.closest("[data-playground-group]");
        var type=tabBtn.getAttribute("data-pg-tab");
        if(!group)return;
        group.querySelectorAll("[data-pg-tab]").forEach(function(b){b.classList.remove("active");});
        tabBtn.classList.add("active");
        group.querySelectorAll("[data-pg-content]").forEach(function(panel){
          if(panel.getAttribute("data-pg-content")===type){
            panel.style.display="block";
          }else{
            panel.style.display="none";
          }
        });
        initIcons();
      });
    });
  }
  /* === Live component text customizer === */
  function initCustomizers(){
    document.querySelectorAll("[data-customize-target]").forEach(function(input){
      input.addEventListener("input",function(){
        var targetId=input.getAttribute("data-customize-target");
        var val=input.value.trim()||input.placeholder;
        document.querySelectorAll("[data-custom-preview='"+targetId+"']").forEach(function(el){
          el.textContent=val;
          if(el.hasAttribute("data-hover"))el.setAttribute("data-hover",val);
        });
        var codeEl=document.querySelector("[data-custom-code='"+targetId+"']");
        if(codeEl){
          var tmpl=codeEl.getAttribute("data-code-template")||"";
          codeEl.textContent=tmpl.replace(/{TEXT}/g,val);
        }
      });
    });
  }
  /* === Spacing rail viewport simulator === */
  function initViewportSimulator(){
    var sel=document.getElementById("ds-viewport-select");
    if(!sel)return;
    sel.addEventListener("change",function(){
      var mode=sel.value;
      document.querySelectorAll("[data-space-val]").forEach(function(bar){
        var sizes=JSON.parse(bar.getAttribute("data-space-val"));
        var px=sizes[mode]||0;
        bar.style.width=Math.min(px*3,500)+"px";
        var row=bar.closest("tr");
        if(row){
          var label=row.querySelector(".ds-pixel-label");
          if(label)label.textContent=px+"px";
        }
      });
    });
  }
  /* === GSAP animation sandbox ===
     Each card (.ds-anim-card) contains:
       - a [data-play-anim] button
       - a .ds-anim-sandbox-element target
     Falls back to CSS class toggling if GSAP is unavailable. */
  function initAnimationSandbox(){
    document.querySelectorAll("[data-play-anim]").forEach(function(btn){
      btn.addEventListener("click",function(){
        var animType=btn.getAttribute("data-play-anim");
        var card=btn.closest(".ds-anim-card");
        if(!card)return;
        var el=card.querySelector(".ds-anim-sandbox-element");
        if(!el)return;
        if(window.gsap){
          runGsapAnim(animType,el);
        }else{
          runCssAnim(animType,el);
        }
      });
    });
  }
  function runGsapAnim(type,el){
    var g=window.gsap;
    g.killTweensOf(el);
    g.set(el,{clearProps:"all"});
    if(type==="blind-out"){
      /* overlay wipes from full cover to gone */
      g.fromTo(el,{scaleY:1,transformOrigin:"top center"},{scaleY:0,duration:1.4,ease:"power3.inOut"});
    }else if(type==="hfade"){
      /* text element fades up */
      g.fromTo(el,{y:28,opacity:0},{y:0,opacity:1,duration:0.85,ease:"power2.out"});
    }else if(type==="scale-out2"){
      /* background panel zooms in */
      g.fromTo(el,{scale:1.25,opacity:0.4},{scale:1,opacity:1,duration:1.8,ease:"expo.out"});
    }else if(type==="dep-pulse"){
      /* dot pulses outward 3 times */
      g.fromTo(el,{scale:1,opacity:1},{scale:2.2,opacity:0,duration:0.9,repeat:2,repeatDelay:0.1,ease:"sine.out"});
    }
  }
  function runCssAnim(type,el){
    /* fallback: toggle a class that triggers a CSS @keyframes animation */
    el.classList.remove("css-anim-active");
    void el.offsetWidth; /* force reflow */
    el.setAttribute("data-css-anim",type);
    el.classList.add("css-anim-active");
    el.addEventListener("animationend",function(){
      el.classList.remove("css-anim-active");
    },{once:true});
  }
  /* === Typography live tester === */
  function initTypoTester(){
    var input=document.getElementById("typo-input");
    if(!input)return;
    var h1=document.getElementById("typo-preview-h1");
    var h2=document.getElementById("typo-preview-h2");
    var p=document.getElementById("typo-preview-p");
    input.addEventListener("input",function(){
      var val=input.value.trim()||"Exemplo de Texto da Ferrovia";
      if(h1)h1.textContent=val;
      if(h2)h2.textContent=val;
      if(p)p.textContent=val;
    });
  }
  /* === Sidebar active link on scroll === */
  function initNavHighlight(){
    var links=document.querySelectorAll(".ds-nav-link[href^='#']");
    if(!links.length)return;
    var sections=[];
    links.forEach(function(link){
      var id=link.getAttribute("href").replace("#","");
      var section=document.getElementById(id);
      if(section)sections.push({section:section,link:link});
    });
    var main=document.querySelector("main");
    var scrollTarget=main||window;
    function onScroll(){
      var scrollTop=(main?main.scrollTop:window.scrollY)||0;
      var active=null;
      sections.forEach(function(item){
        if(item.section.offsetTop-120<=scrollTop){
          active=item;
        }
      });
      links.forEach(function(l){l.classList.remove("active");});
      if(active)active.link.classList.add("active");
    }
    scrollTarget.addEventListener("scroll",onScroll,{passive:true});
    onScroll();
  }
})();
