﻿using System;
namespace TDDMicroExercises.OneSolution.TirePressureMonitoringSystem.SomeDependencies
{
    public class AnAlarmClient3
    {
        // A class with the only goal of simulating a dependency on Alart
        // that has impact on the refactoring.

        private Alarm _anAlarm;

        public AnAlarmClient3()
        {
            _anAlarm = new Alarm();
        }

        public void DoSomething() 
        {
			_anAlarm.Check();          
        }

		public void DoSomethingElse()
		{
			bool isAlarmOn = _anAlarm.AlarmOn;
		}
    }
}
