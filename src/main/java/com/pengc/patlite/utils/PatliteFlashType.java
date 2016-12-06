package com.pengc.patlite.utils;

public enum PatliteFlashType {
	On {
		@Override
		public int getNumber() {
			return 2;
		}
	},
	Off {
		@Override
		public int getNumber() {
			return 1;
		}
	},
	Pt1 {
		@Override
		public int getNumber() {
			return 3;
		}
	},
	Pt2 {
		@Override
		public int getNumber() {
			return 5;
		}
	},
	Hold {
		@Override
		public int getNumber() {
			return 4;
		}
	};

	public abstract int getNumber();
}
