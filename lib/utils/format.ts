import * as Enum from "@lib/utils/enum";

/**
 * Example function for Status Format
 * *Recommendation : Declare cases with server,
 * *Use Enum Data for handling cases
 * @params status
 * @return string
 */

function statusMessage(status: number): string {
	switch (status) {
		case Enum.Status.SUCCESS: {
			return "request success!";
		}
		case Enum.Status.ERROR: {
			return "request error!";
		}
		default: {
			return "unknown status!";
		}
	}
}

export { statusMessage };
