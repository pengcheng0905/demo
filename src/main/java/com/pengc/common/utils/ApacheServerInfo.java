package com.pengc.common.utils;

public enum ApacheServerInfo {
	Version {
		@Override
		public String getText() {
			return "Server Version";
		}
	},
	MPM {
		@Override
		public String getText() {
			return "Server MPM";
		}
	},
	Built {
		@Override
		public String getText() {
			return "Server Built";
		}
	},
	DistributedBy {
		@Override
		public String getText() {
			return "Distributed by";
		}
	},
	CompiledWith {
		@Override
		public String getText() {
			return "Compiled with";
		}
	},
	CurrentTime {
		@Override
		public String getText() {
			return "Current Time";
		}
	},
	RestartTime {
		@Override
		public String getText() {
			return "Restart Time";
		}
	},
	ParentServerConfigGeneration {
		@Override
		public String getText() {
			return "Parent Server Config. Generation";
		}
	},
	ParentServerMPMGeneration {
		@Override
		public String getText() {
			return "Parent Server MPM Generation";
		}
	},
	Uptime {
		@Override
		public String getText() {
			return "Server uptime";
		}
	},
	Load {
		@Override
		public String getText() {
			return "Server load";
		}
	},
	TotalAccesses {
		@Override
		public String getText() {
			return "Total accesses";
		}
	};
	public abstract String getText();
}
