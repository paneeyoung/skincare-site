/* @ds-bundle: {"format": 4, "namespace": "ModeeSkincare", "components": [{"name": "Button"}, {"name": "Chip"}, {"name": "Icon"}, {"name": "Logo"}, {"name": "SectionHeading"}, {"name": "ProductCard"}, {"name": "CategoryCard"}, {"name": "QuantityStepper"}, {"name": "ShippingProgress"}, {"name": "NavPills"}, {"name": "NewsletterField"}, {"name": "TestimonialCard"}]} */
(function(){
var R=window.React,h=R.createElement,useState=R.useState,A=Object.assign;
var PATHS={
arrow:'M5 12h14M13 6l6 6-6 6',leaf:'M5 19c0-8 6-14 14-14 0 8-6 14-14 14zM5 19l7-7',
heart:'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z',drop:'M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z',
sparkle:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',shield:'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z',
flask:'M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3',bag:'M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2',
search:'M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM20 20l-4.5-4.5',user:'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 21c1-4 4-6 8-6s7 2 8 6',
truck:'M3 6h11v10H3zM14 10h4l3 3v3h-7M7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM17 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4z',
'return':'M4 10h11a5 5 0 0 1 0 10H9M4 10l4-4M4 10l4 4',lock:'M5 11h14v10H5zM8 11V8a4 4 0 0 1 8 0v3',
box:'M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10',insta:'M9 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9a5 5 0 0 1 5-5zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z'
};
function Icon(p){var size=p.size||20;
 return h('svg',{width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:p.color||'currentColor',strokeWidth:p.stroke||1.4,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':true,style:A({flex:'0 0 auto'},p.style)},h('path',{d:PATHS[p.name]||PATHS.arrow}));}
Icon.names=Object.keys(PATHS);

var V={
 primary:{hover:'var(--olive-800)',base:{background:'var(--olive-700)',color:'var(--cream-50)',border:'none',borderRadius:999,padding:'16px 28px'}},
 light:{hover:'#fff',base:{background:'var(--cream-100)',color:'var(--ink-900)',border:'none',borderRadius:999,padding:'15px 24px'}},
 outline:{hover:'var(--cream-200)',base:{background:'transparent',color:'var(--ink-900)',border:'1px solid var(--sand-400)',borderRadius:0,padding:'13px 22px'}},
 link:{hover:'transparent',base:{background:'transparent',color:'var(--ink-900)',border:'none',borderBottom:'1px solid var(--gold-500)',borderRadius:0,padding:'14px 2px'}}
};
function Button(p){var s=useState(false),hov=s[0],setH=s[1];var v=V[p.variant||'primary'],sm=p.size==='sm';
 var st=A({display:'inline-flex',alignItems:'center',justifyContent:'center',gap:12,cursor:'pointer',fontFamily:'var(--font-body)',fontSize:sm?12:13,letterSpacing:'var(--ls-button)',textTransform:'uppercase',width:p.full?'100%':undefined,transition:'background var(--dur)'},v.base,{padding:sm?'11px 18px':v.base.padding,background:hov?v.hover:v.base.background},p.style);
 return h('button',{type:'button',onClick:p.onClick,onMouseEnter:function(){setH(true)},onMouseLeave:function(){setH(false)},style:st},p.children,p.arrow?h(Icon,{name:'arrow',size:16,stroke:1.6}):null);}

function Chip(p){var a=!!p.active;
 return h('button',{type:'button',onClick:p.onClick,style:{cursor:'pointer',fontFamily:'var(--font-body)',fontSize:12,letterSpacing:'var(--ls-label)',textTransform:'uppercase',padding:'10px 20px',borderRadius:999,background:a?'var(--olive-700)':'transparent',color:a?'var(--cream-50)':'var(--ink-900)',border:'1px solid '+(a?'var(--olive-700)':'var(--sand-400)')}},p.children);}

function Logo(p){var k=p.size==='sm'?0.8:1;
 return h('span',{style:{display:'inline-flex',flexDirection:'column',alignItems:p.align==='left'?'flex-start':'center',lineHeight:1,color:'var(--ink-logo)'}},
  h('span',{style:{fontFamily:'var(--font-script)',fontSize:68*k,lineHeight:.8,color:'var(--gold-500)',padding:'6px 6px 0'}},'M'),
  h('span',{style:{fontSize:14*k,letterSpacing:'var(--ls-logo)',marginTop:8,marginRight:'-.36em',fontFamily:'var(--font-body)'}},'MODEE'),
  h('span',{style:{fontSize:10*k,letterSpacing:'.3em',marginTop:5,marginRight:'-.3em',fontFamily:'var(--font-body)'}},'CREATIVE'));}

function SectionHeading(p){var inv=!!p.inverse,c=p.align==='center';
 return h('div',{style:{display:'flex',flexDirection:'column',gap:10,alignItems:c?'center':'flex-start',textAlign:c?'center':'left'}},
  p.eyebrow?h('span',{style:{fontFamily:'var(--font-body)',fontSize:12,letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',color:inv?'var(--gold-300)':'var(--gold-500)'}},p.eyebrow):null,
  h('h2',{style:{margin:0,fontFamily:'var(--font-display)',fontWeight:500,fontSize:'clamp(34px,3.6vw,48px)',lineHeight:1.05,color:inv?'var(--cream-100)':'var(--ink-900)'}},p.title),
  p.children);}

function ProductCard(p){
 return h('div',{style:{display:'flex',flexDirection:'column',gap:16,fontFamily:'var(--font-body)'}},
  h('div',{style:{aspectRatio:'1/1.15',borderRadius:16,overflow:'hidden',background:'var(--sand-100)'}},
   p.image?h('div',{role:'img','aria-label':p.name,style:{width:'100%',height:'100%',backgroundImage:'url('+p.image+')',backgroundSize:'cover',backgroundPosition:'center'}}):null),
  h('div',{style:{display:'flex',flexDirection:'column',gap:14}},
   h('div',{style:{display:'flex',flexDirection:'column',gap:4}},
    p.category?h('span',{style:{fontSize:11,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--gold-500)'}},p.category):null,
    h('span',{style:{fontFamily:'var(--font-display)',fontSize:23,fontWeight:600,color:'var(--ink-900)'}},p.name),
    h('span',{style:{fontSize:13,color:'var(--ink-500)'}},p.desc),
    h('span',{style:{fontSize:15,fontWeight:500,marginTop:6,color:'var(--ink-900)'}},p.price)),
   h(Button,{size:'sm',full:true,onClick:p.onAdd,style:{padding:'14px 18px'}},p.inBag?'Add to cart · '+p.inBag+' in bag':'Add to cart')));}

function CategoryCard(p){var s=useState(false),hov=s[0],setH=s[1];
 return h('a',{href:'#',onClick:function(e){e.preventDefault();p.onClick&&p.onClick()},onMouseEnter:function(){setH(true)},onMouseLeave:function(){setH(false)},style:{display:'flex',flexDirection:'column',background:'var(--cream-50)',borderRadius:20,overflow:'hidden',color:'var(--ink-900)',textDecoration:'none',transform:hov?'translateY(-3px)':'none',transition:'transform var(--dur)'}},
  h('div',{style:{aspectRatio:'4/5',background:'var(--sand-100)'}},p.image?h('div',{style:{width:'100%',height:'100%',backgroundImage:'url('+p.image+')',backgroundSize:'cover',backgroundPosition:'center'}}):null),
  h('div',{style:{padding:'16px 18px 18px',display:'flex',flexDirection:'column',gap:4}},
   h('span',{style:{fontFamily:'var(--font-display)',fontSize:24,fontWeight:500}},p.name),
   h('span',{style:{fontFamily:'var(--font-body)',fontSize:12,letterSpacing:'.12em',color:'var(--ink-500)',textTransform:'uppercase'}},'Shop now →')));}

function QuantityStepper(p){var b={width:34,height:34,border:'none',background:'transparent',cursor:'pointer',fontSize:18,color:'var(--ink-900)'};
 return h('div',{style:{display:'inline-flex',alignItems:'center',border:'1px solid var(--sand-400)',borderRadius:999,fontFamily:'var(--font-body)'}},
  h('button',{type:'button',style:b,onClick:p.onDec,'aria-label':'Decrease'},'−'),
  h('span',{style:{minWidth:24,textAlign:'center',fontSize:14,color:'var(--ink-900)'}},p.value),
  h('button',{type:'button',style:b,onClick:p.onInc,'aria-label':'Increase'},'+'));}

function ShippingProgress(p){var th=p.threshold==null?50:p.threshold,cur=p.currency||'€',sub=p.subtotal||0,left=Math.max(0,th-sub);
 return h('div',{style:{display:'flex',flexDirection:'column',gap:8,fontFamily:'var(--font-body)'}},
  h('div',{style:{height:4,borderRadius:2,background:'var(--sand-200)',overflow:'hidden'}},h('div',{style:{height:'100%',width:Math.min(100,sub/th*100)+'%',background:'var(--gold-500)',transition:'width .3s'}})),
  h('span',{style:{fontSize:13,color:'var(--ink-700)'}},left?'Add '+cur+left.toFixed(2)+' more for free shipping':'You’ve unlocked free shipping'));}

function NavPills(p){
 return h('nav',{style:{display:'inline-flex',gap:6,flexWrap:'wrap',alignItems:'center',background:'var(--cream-50)',borderRadius:999,padding:6,boxShadow:'var(--shadow-soft)',fontFamily:'var(--font-body)'}},
  (p.items||[]).map(function(i){var a=i===p.active;
   return h('a',{key:i,href:'#',onClick:function(e){e.preventDefault();p.onSelect&&p.onSelect(i)},style:{padding:'9px 18px',borderRadius:999,fontSize:13,letterSpacing:'var(--ls-nav)',textDecoration:'none',background:a?'var(--olive-700)':'transparent',color:a?'var(--cream-50)':'var(--ink-900)'}},i);}));}

function NewsletterField(p){
 return h('div',{style:{display:'flex',border:'1px solid var(--sand-400)',background:'var(--cream-50)'}},
  h('input',{placeholder:p.placeholder||'Your email','aria-label':p.placeholder||'Your email',style:{flex:1,minWidth:0,border:'none',background:'transparent',padding:'13px 14px',fontFamily:'var(--font-body)',fontSize:14,color:'var(--ink-900)',outline:'none'}}),
  h('button',{type:'button',onClick:p.onSubmit,'aria-label':'Subscribe',style:{border:'none',background:'var(--olive-700)',color:'var(--cream-50)',width:48,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}},h(Icon,{name:'arrow',size:16,stroke:1.6})));}

function TestimonialCard(p){
 return h('figure',{style:{margin:0,padding:30,border:'1px solid var(--sand-200)',borderRadius:18,display:'flex',flexDirection:'column',gap:18,background:'var(--cream-100)'}},
  h('span',{'aria-label':'5 out of 5 stars',style:{color:'var(--gold-500)',letterSpacing:'.2em',fontSize:15}},'★★★★★'),
  h('blockquote',{style:{margin:0,fontFamily:'var(--font-display)',fontSize:22,lineHeight:1.4,fontStyle:'italic',color:'var(--ink-900)'}},'“'+p.quote+'”'),
  h('figcaption',{style:{fontFamily:'var(--font-body)',fontSize:12,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--ink-500)'}},'— '+p.author));}

window.ModeeSkincare={Button:Button,Chip:Chip,Icon:Icon,Logo:Logo,SectionHeading:SectionHeading,ProductCard:ProductCard,CategoryCard:CategoryCard,QuantityStepper:QuantityStepper,ShippingProgress:ShippingProgress,NavPills:NavPills,NewsletterField:NewsletterField,TestimonialCard:TestimonialCard};
})();
