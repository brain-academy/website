import {Flex} from "@chakra-ui/react"
import React from "react"

export default function Calendar() {
	return <Flex
		height="100%"
		alignItems="center"
		justifyContent="center"
	>
		<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%239E69AF&ctz=Europe%2FParis&src=aWh1ZzY3dXVnNDAxbzMxY29ncnFmZzczaTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E&showTitle=0&showDate=1&showTz=0&showCalendars=1&hl=fr"
			style={{
				borderWidth: 0,
				maxWidth: "1200px"
			}}
			width="100%"
			height="600"
			frameBorder="0"
			scrolling="no">
		</iframe>
	</Flex>
}
