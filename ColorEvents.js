//COLORS:
// Green - 10
// Yellow - 5
// Orange - 6
// Pale Red - 4
// Red - 11
// Gray - 8
// Black - ""
// https://developers.google.com/apps-script/reference/calendar/event-color

function updatesColor() {
  var today = new Date();
  var yearsFromNow = new Date();
  yearsFromNow.setDate(today.getDate() + 2 * 365);

  var calendars = CalendarApp.getOwnedCalendarsByName("Assignments");
  var calendar = calendars[0];

  var events = calendar.getEvents(today, yearsFromNow);
  for (var i = 0; i < events.length; i++) {
    var e = events[i];
    var title = e.getTitle();
    var color = e.getColor();
    var span = (e.getEndTime() - today) / 1000/60/60/24;
    if (title[0] == "~") {
      if (color != "8") e.setColor(CalendarApp.EventColor.GRAY); Utilities.sleep(5000);
    }
    else if (title.substring(0,6) == "!!!!: ") {
      if (span - 1 < 7) if (color != "11") { e.setColor(CalendarApp.EventColor.RED); Utilities.sleep(5000); } else continue;
      else if (span - 1 < 9) if (color != "4") { e.setColor(CalendarApp.EventColor.PALE_RED); Utilities.sleep(5000); } else continue;
      else if (span - 1 < 11) if (color != "6") { e.setColor(CalendarApp.EventColor.ORANGE); Utilities.sleep(5000); } else continue;
      else if (span - 1 < 14) if (color != "5") { e.setColor(CalendarApp.EventColor.YELLOW); Utilities.sleep(5000); } else continue;
      else if (span - 1 < 16) if (color != "10") { e.setColor(CalendarApp.EventColor.GREEN); Utilities.sleep(5000); } else continue;
      else if (color != "2") { e.setColor(CalendarApp.EventColor.PALE_GREEN); Utilities.sleep(5000); }
    }
    else if (title.substring(0,5) == "!!!: ") {
      if (span - 1 < 4) if (color != "11") { e.setColor(CalendarApp.EventColor.RED);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 6) if (color != "4") { e.setColor(CalendarApp.EventColor.PALE_RED);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 8) if (color != "6") { e.setColor(CalendarApp.EventColor.ORANGE);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 10) if (color != "5") { e.setColor(CalendarApp.EventColor.YELLOW);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 12) if (color != "10") { e.setColor(CalendarApp.EventColor.GREEN); Utilities.sleep(5000); } else continue;
      else if (color != "2") { e.setColor(CalendarApp.EventColor.PALE_GREEN); Utilities.sleep(5000); }
    }
    else if (title.substring(0,4) == "!!: ") {
      if (span - 1 < 2) if (color != "11") { e.setColor(CalendarApp.EventColor.RED);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 3) if (color != "4") { e.setColor(CalendarApp.EventColor.PALE_RED);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 4) if (color != "6") { e.setColor(CalendarApp.EventColor.ORANGE);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 6) if (color != "5") { e.setColor(CalendarApp.EventColor.YELLOW);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 8) if (color != "10") { e.setColor(CalendarApp.EventColor.GREEN); Utilities.sleep(5000); } else continue;
      else if (color != "2") { e.setColor(CalendarApp.EventColor.PALE_GREEN); Utilities.sleep(5000); }
    }
    else if (title.substring(0,3) == "!: ") {
      if (span - 1 < 0.5) if (color != "11") { e.setColor(CalendarApp.EventColor.RED);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 1) if (color != "4") { e.setColor(CalendarApp.EventColor.PALE_RED);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 1.5) if (color != "6") { e.setColor(CalendarApp.EventColor.ORANGE);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 2) if (color != "5") { e.setColor(CalendarApp.EventColor.YELLOW);  Utilities.sleep(5000);} else continue;
      else if (span - 1 < 3) if (color != "10") { e.setColor(CalendarApp.EventColor.GREEN); Utilities.sleep(5000); } else continue;
      else if (color != "2") { e.setColor(CalendarApp.EventColor.PALE_GREEN); Utilities.sleep(5000); }
    }
    else if (color != "2") {
      e.setColor(CalendarApp.EventColor.PALE_GREEN); Utilities.sleep(5000);
    }
    console.log(title+" "+span+" "+color+" "+e.getColor());
  }
}
