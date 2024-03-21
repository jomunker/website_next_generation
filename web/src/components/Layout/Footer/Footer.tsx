import React from "react";

export default function Footer() {
	return (
		<footer className="w-full flex justify-center items-center pb-3">
			<a className="link" href="/impressum">
				Impressum
			</a>
			<span className="border-x-2 border-primary h-9 mx-[48px] w-0" />
			<a className="link" href="/copyright">
				Copyright
			</a>
		</footer>
	);
}
