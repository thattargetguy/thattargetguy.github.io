window.addEventListener("DOMContentLoaded", function() {
	const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", cont = document.getElementById("container");
	document.label.addEventListener("submit", function(evt) {
		let [a, b, c, d, e, f, g, h, i, j, k] = [...Array.from(this.elements, e => e.value.toUpperCase())];
		evt.preventDefault(), c = c || b, e = e || d, g = g || f, i = i || h, k = k || j, f = alpha.indexOf(f), g = alpha.indexOf(g);
		for(let n1 = +b, l1 = +c; n1 <= l1; n1 ++)
			for(let n2 = +d, l2 = +e; n2 <= l2; n2 ++)
				for(let n3 = +f, l3 = +g; n3 <= l3; n3 ++)
					for (let n4 = +h, l4 = +i; n4 <= l4; n4 ++)
						for(let n5 = +j, l5 = +k; n5 <= l5; n5 ++) {
							let loc = `${a} ${((n1 * 100) + n2)} ${alpha[n3]} ${("0" + n4).slice(-2)} ${("0" + n5).slice(-2)}`,
								div = document.createElement("div"), img = document.createElement("img"), text = document.createElement("div");
							div.className = "label";
							img.src = QRCode.generatePNG(loc.replaceAll(" ", ""), { modulesize: 1.5 }), text.append(loc), cont.appendChild(div).append(text, img);
						}
	}), document.label.addEventListener("reset", () => document.getElementById("container").innerHTML = "");
});