/*
 Highcharts JS v2.0.5 (2010-09-17)
 Exporting module

 (c) 2010 Torstein H�nsi

 License: www.highcharts.com/license
 */
(function() {
    var j = Highcharts,F = j.Chart,C = j.addEvent,v = j.defaultOptions,p = j.createElement,G = j.discardElement,y = j.css,D = j.merge,q = j.each,r = j.extend;
    v = Math;
    var J = v.max,s = document,K = window,w = "M",x = "L",z = "div",L = "hidden",A = "none",M = "highcharts-",H = "absolute",o = "px";
    v = j.setOptions({lang:{downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",exportButtonTitle:"Export to raster or vector image",printButtonTitle:"Print the chart"}});
    v.navigation = {menuStyle:{border:"1px solid #A0A0A0",background:"#FFFFFF"},menuItemStyle:{padding:"0 5px",background:A,color:"#303030"},menuItemHoverStyle:{background:"#4572A5",color:"#FFFFFF"},buttonOptions:{align:"right",backgroundColor:{linearGradient:[0,0,0,20],stops:[
        [0.4,"#F7F7F7"],
        [0.6,"#E3E3E3"]
    ]},borderColor:"#B0B0B0",borderRadius:3,borderWidth:1,height:20,hoverBorderColor:"#909090",hoverSymbolFill:"#81A7CF",hoverSymbolStroke:"#4572A5",symbolFill:"#E0E0E0",symbolStroke:"#A0A0A0",symbolX:11.5,
        symbolY:10.5,verticalAlign:"top",width:24,y:10}};
    v.exporting = {type:"image/png",url:"http://export.highcharts.com/",width:800,buttons:{exportButton:{symbol:"exportIcon",x:-10,symbolFill:"#A8BF77",hoverSymbolFill:"#768F3E",_titleKey:"exportButtonTitle",menuItems:[
        {textKey:"downloadPNG",onclick:function() {
            this.exportChart()
        }},
        {textKey:"downloadJPEG",onclick:function() {
            this.exportChart({type:"image/jpeg"})
        }},
        {textKey:"downloadPDF",onclick:function() {
            this.exportChart({type:"application/pdf"})
        }},
        {textKey:"downloadSVG",
            onclick:function() {
                this.exportChart({type:"image/svg+xml"})
            }}
    ]},printButton:{symbol:"printIcon",x:-36,symbolFill:"#B5C9DF",hoverSymbolFill:"#779ABF",_titleKey:"printButtonTitle",onclick:function() {
        this.print()
    }}}};
    r(F.prototype, {getSVG:function(b) {
        var c = this,a,e,d,h,f,g = D(c.options, b);
        if (!s.createElementNS) {
            s.createElementNS = function(k, i) {
                var m = s.createElement(i);
                m.getBBox = function() {
                    return c.renderer.Element.prototype.getBBox.apply({element:m})
                };
                return m
            };
        }
        a = p(z, null, {position:H,top:"-9999em",width:c.chartWidth +
                o,height:c.chartHeight + o}, s.body);
        r(g.chart, {renderTo:a,renderer:"SVG"});
        g.exporting.enabled = false;
        g.chart.plotBackgroundImage = null;
        g.series = [];
        q(c.series, function(k) {
            d = k.options;
            d.animation = false;
            d.showCheckbox = false;
            d.data = [];
            q(k.data, function(i) {
                h = i.config == null || typeof i.config == "number" ? {y:i.y} : i.config;
                h.x = i.x;
                d.data.push(h);
                (f = i.config && i.config.marker) && /^url\(/.test(f.symbol) && delete f.symbol
            });
            g.series.push(d)
        });
        b = new Highcharts.Chart(g);
        e = b.container.innerHTML;
        g = null;
        b.destroy();
        G(a);
        e =
                e.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/isTracker="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/id=([^" >]+)/g, 'id="$1"').replace(/class=([^" ]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:path/g, "path").replace(/style="([^"]+)"/g, function(k) {
                    return k.toLowerCase()
                });
        e = e.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'");
        if (e.match(/ xmlns="/g).length == 2) {
            e =
                    e.replace(/xmlns="[^"]+"/, "");
        }
        return e
    },exportChart:function(b, c) {
        var a,e = this,d = e.getSVG(c);
        b = D(e.options.exporting, b);
        a = p("form", {method:"post",action:b.url}, {display:A}, s.body);
        q(["filename","type","width","svg"], function(h) {
            p("input", {type:L,name:h,value:{filename:b.filename || "chart",type:b.type,width:b.width,svg:d}[h]}, null, a)
        });
        a.submit();
        G(a)
    },print:function() {
        var b = this,c = b.container,a = [],e = c.parentNode,d = s.body,h = d.childNodes;
        if (!b.isPrinting) {
            b.isPrinting = true;
            q(h, function(f, g) {
                if (f.nodeType ==
                        1) {
                    a[g] = f.style.display;
                    f.style.display = A
                }
            });
            d.appendChild(c);
            K.print();
            setTimeout(function() {
                e.appendChild(c);
                q(h, function(f, g) {
                    if (f.nodeType == 1) {
                        f.style.display = a[g]
                    }
                });
                b.isPrinting = false
            }, 1E3)
        }
    },contextMenu:function(b, c, a, e, d, h) {
        var f = this,g = f.options.navigation,k = g.menuItemStyle,i = f.chartWidth,m = f.chartHeight,t = "cache-" + b,l = f[t],n = J(d, h),u = "3px 3px 10px #888",I,E;
        if (!l) {
            f[t] = l = p(z, {className:M + b}, {position:H,zIndex:1E3,padding:n + o}, f.container);
            I = p(z, null, r({MozBoxShadow:u,WebkitBoxShadow:u,boxShadow:u},
                    g.menuStyle), l);
            E = function() {
                y(l, {display:A})
            };
            C(l, "mouseleave", E);
            q(c, function(B) {
                if (B) {
                    p(z, {onclick:function() {
                        E();
                        B.onclick.apply(f, arguments)
                    },onmouseover:function() {
                        y(this, g.menuItemHoverStyle)
                    },onmouseout:function() {
                        y(this, k)
                    },innerHTML:B.text || j.getOptions().lang[B.textKey]}, r({cursor:"pointer"}, k), I)
                }
            });
            f.exportMenuWidth = l.offsetWidth;
            f.exportMenuHeight = l.offsetHeight
        }
        b = {display:"block"};
        if (a + f.exportMenuWidth > i) {
            b.right = i - a - d - n + o;
        }
        else {
            b.left = a - n + o;
        }
        if (e + h + f.exportMenuHeight > m) {
            b.bottom = m - e - n +
                    o;
        }
        else {
            b.top = e + h - n + o;
        }
        y(l, b)
    },addButton:function(b) {
        function c() {
            l.attr(u);
            t.attr(n)
        }

        var a = this,e = a.renderer,d = D(a.options.navigation.buttonOptions, b),h = d.onclick,f = d.menuItems;
        b = a.getAlignment(d);
        var g = b.x,k = b.y,i = d.width,m = d.height,t,l;
        b = d.borderWidth;
        var n = {stroke:d.borderColor},u = {stroke:d.symbolStroke,fill:d.symbolFill};
        if (d.enabled !== false) {
            t = e.rect(0, 0, i, m, d.borderRadius, b).translate(g, k).attr(r({fill:d.backgroundColor,"stroke-width":b,zIndex:19}, n)).add();
            b = e.rect(g, k, i, m, 0).attr({fill:"rgba(255, 255, 255, 0.001)",
                title:j.getOptions().lang[d._titleKey],zIndex:21}).css({cursor:"pointer"}).on("mouseover", function() {
                l.attr({stroke:d.hoverSymbolStroke,fill:d.hoverSymbolFill});
                t.attr({stroke:d.hoverBorderColor})
            }).on("mouseout", c).add();
            C(b.element, "click", c);
            if (f) {
                h = function() {
                    a.contextMenu("export-menu", f, g, k, i, m)
                };
            }
            C(b.element, "click", function() {
                h.apply(a, arguments)
            });
            l = e.symbol(d.symbol, g + d.symbolX, k + d.symbolY, (d.symbolSize || 12) / 2).attr(r(u, {"stroke-width":d.symbolStrokeWidth || 1,zIndex:20})).add()
        }
    }});
    j.Renderer.prototype.symbols.exportIcon =
            function(b, c, a) {
                return[w,b - a,c + a,x,b + a,c + a,b + a,c + a * 0.5,b - a,c + a * 0.5,"Z",w,b,c + a * 0.5,x,b - a * 0.5,c - a / 3,b - a / 6,c - a / 3,b - a / 6,c - a,b + a / 6,c - a,b + a / 6,c - a / 3,b + a * 0.5,c - a / 3,"Z"]
            };
    j.Renderer.prototype.symbols.printIcon = function(b, c, a) {
        return[w,b - a,c + a * 0.5,x,b + a,c + a * 0.5,b + a,c - a / 3,b - a,c - a / 3,"Z",w,b - a * 0.5,c - a / 3,x,b - a * 0.5,c - a,b + a * 0.5,c - a,b + a * 0.5,c - a / 3,"Z",w,b - a * 0.5,c + a * 0.5,x,b - a * 0.75,c + a,b + a * 0.75,c + a,b + a * 0.5,c + a * 0.5,"Z"]
    };
    j.Chart = function(b, c) {
        return new F(b, function(a) {
            var e,d = a.options.exporting,h = d.buttons;
            if (d.enabled !==
                    false) {
                for (e in h) {
                    a.addButton(h[e]);
                }
            }
            c && c()
        })
    }
})();
