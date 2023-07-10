import { RGB } from '../color/color';

export interface Cmd {
	cmd: string
	parm: any
}

export interface CmdLeds {
	leds: Array<RGB>
}

export interface CmdLedsParameter {
	rows: number
	count: number
}

export interface CmdButton {
	action: string
}

export interface CmdMode {
	id: string
	parm: any
}

export interface CmdModeLimits {
	id: string
	limits: any
}

export interface CmdModeResolver {
	modes: string[]
}

export const CmdModeActionRandomizeId = "randomize"
export const CmdModeActionId = "action"

export interface CmdModeAction{
	action: string
}