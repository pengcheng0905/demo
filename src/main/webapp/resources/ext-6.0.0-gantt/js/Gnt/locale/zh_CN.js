Ext.define("Gnt.locale.zh_CN", {
    extend: Sch.locale.Locale,
    singleton: true,
    l10n: {
        "Gnt.util.DurationParser": {
            unitsRegex: {
                MILLI: /^ms$|^mil/i,
                SECOND: /^s$|^sec/i,
                MINUTE: /^m$|^min/i,
                HOUR: /^h$|^hr$|^hour/i,
                DAY: /^d$|^day/i,
                WEEK: /^w$|^wk|^week/i,
                MONTH: /^mo|^mnt/i,
                QUARTER: /^q$|^quar|^qrt/i,
                YEAR: /^y$|^yr|^year/i
            }
        },
        "Gnt.util.DependencyParser": {
            typeText: {
                SS: "SS",
                SF: "SF",
                FS: "FS",
                FF: "FF"
            }
        },
        "Gnt.panel.Timeline": {
            start: "开始",
            end: "结束"
        },
        "Gnt.field.ShowInTimeline": {
            yes: "是",
            no: "否"
        },
        "Gnt.column.ShowInTimeline": {
            text: "Show in timeline"
        },
        "Gnt.field.ConstraintType": {
            none: "None"
        },
        "Gnt.field.Duration": {
            invalidText: "Invalid value"
        },
        "Gnt.field.Effort": {
            invalidText: "Invalid value"
        },
        "Gnt.field.Percent": {
            invalidText: "Invalid value"
        },
        "Gnt.field.SchedulingMode": {
            Normal: "Normal",
            FixedDuration: "Fixed duration",
            EffortDriven: "Effort driven",
            DynamicAssignment: "Dynamic assignment"
        },
        "Gnt.feature.DependencyDragDrop": {
            fromText: "从",
            toText: "到",
            startText: "开始",
            endText: "结束"
        },
        "Gnt.Tooltip": {
            startText: "开始: ",
            endText: "结束: ",
            durationText: "周期: "
        },
        "Gnt.plugin.TaskContextMenu": {
            taskInformation: "任务信息...",
            projectInformation: "项目信息...",
            newTaskText: "新建任务",
            deleteTask: "删除任务",
            editLeftLabel: "编辑左标签",
            editRightLabel: "编辑右标签",
            add: "添加...",
            deleteDependency: "删除依赖...",
            addTaskAbove: "前置任务",
            addTaskBelow: "后置任务",
            addMilestone: "Milestone",
            addSubtask: "子任务",
            addSuccessor: "Successor",
            addPredecessor: "Predecessor",
            convertToMilestone: "Convert to milestone",
            convertToRegular: "Convert to regular task",
            splitTask: "拆分"
        },
        "Gnt.plugin.DependencyEditor": {
            fromText: "从",
            toText: "到",
            typeText: "类型",
            lagText: "延迟",
            endToStartText: "结束 －开始",
            startToStartText: "开始－开始",
            endToEndText: "结束－结束",
            startToEndText: "开始－结束"
        },
        "Gnt.widget.calendar.Calendar": {
            dayOverrideNameHeaderText: "名称",
            overrideName: "名称",
            startDate: "开始时间",
            endDate: "结束时间",
            error: "错误",
            dateText: "时间",
            addText: "编辑",
            removeText: "删除",
            workingDayText: "Working day",
            weekendsText: "Weekends",
            overriddenDayText: "Overridden day",
            overriddenWeekText: "Overridden week",
            workingTimeText: "Working time",
            nonworkingTimeText: "Non-working time",
            dayOverridesText: "Day overrides",
            weekOverridesText: "Week overrides",
            okText: "确定",
            cancelText: "取消",
            parentCalendarText: "Parent calendar",
            noParentText: "No parent",
            selectParentText: "Select parent",
            newDayName: "[Without name]",
            calendarNameText: "Calendar name",
            tplTexts: {
                tplWorkingHours: "Working hours for",
                tplIsNonWorking: "is non-working",
                tplOverride: "override",
                tplInCalendar: "in calendar",
                tplDayInCalendar: "standard day in calendar",
                tplBasedOn: "Based on"
            },
            overrideErrorText: "There is already an override for this day",
            overrideDateError: "There is already a week override on this date: {0}",
            startAfterEndError: "Start date should be less than end date",
            weeksIntersectError: "Week overrides should not intersect"
        },
        "Gnt.widget.calendar.AvailabilityGrid": {
            startText: "开始",
            endText: "结束",
            addText: "添加",
            removeText: "删除",
            error: "错误"
        },
        "Gnt.widget.calendar.DayEditor": {
            workingTimeText: "Working time",
            nonworkingTimeText: "Non-working time"
        },
        "Gnt.widget.calendar.WeekEditor": {
            defaultTimeText: "Default time",
            workingTimeText: "Working time",
            nonworkingTimeText: "Non-working time",
            error: "Error",
            noOverrideError: "Week override contains only 'default' days - can't save it"
        },
        "Gnt.widget.calendar.ResourceCalendarGrid": {
            name: "名称",
            calendar: "日历"
        },
        "Gnt.widget.calendar.CalendarWindow": {
            ok: "确定",
            cancel: "取消"
        },
        "Gnt.widget.calendar.CalendarManager": {
            addText: "Add",
            removeText: "删除",
            add_child: "Add child",
            add_node: "Add calendar",
            add_sibling: "Add sibling",
            remove: "删除",
            calendarName: "Calendar",
            confirm_action: "Confirm action",
            confirm_message: "Calendar has unsaved changes. Would you like to save your changes?"
        },
        "Gnt.widget.calendar.CalendarManagerWindow": {
            title: "Calendar manager",
            ok: "Apply changes",
            cancel: "Close",
            confirm_action: "Confirm action",
            confirm_message: "Calendar has unsaved changes. Would you like to save your changes?"
        },
        "Gnt.field.Assignment": {
            cancelText: "取消",
            closeText: "保存并且关闭"
        },
        "Gnt.column.AssignmentUnits": {
            text: "Units"
        },
        "Gnt.column.Duration": {
            text: "Duration"
        },
        "Gnt.column.Effort": {
            text: "Effort"
        },
        "Gnt.column.EndDate": {
            text: "Finish"
        },
        "Gnt.column.PercentDone": {
            text: "% Done"
        },
        "Gnt.column.ResourceAssignment": {
            text: "Assigned Resources"
        },
        "Gnt.column.ResourceName": {
            text: "Resource Name"
        },
        "Gnt.column.Rollup": {
            text: "Rollup task",
            no: "否",
            yes: "是"
        },
        "Gnt.field.ManuallyScheduled": {
            yes: "是",
            no: "否"
        },
        "Gnt.field.ReadOnly": {
            yes: "是",
            no: "否"
        },
        "Gnt.column.ManuallyScheduled": {
            text: "Manual mode"
        },
        "Gnt.column.SchedulingMode": {
            text: "Mode"
        },
        "Gnt.column.Predecessor": {
            text: "Predecessors"
        },
        "Gnt.column.Successor": {
            text: "Successors"
        },
        "Gnt.column.StartDate": {
            text: "开始"
        },
        "Gnt.column.WBS": {
            text: "WBS"
        },
        "Gnt.column.Sequence": {
            text: "#"
        },
        "Gnt.column.Calendar": {
            text: "Calendar"
        },
        "Gnt.widget.taskeditor.ProjectForm": {
            projectText: "Project",
            nameText: "Name",
            datesText: "Dates",
            startText: "Start",
            finishText: "Finish",
            calendarText: "Calendar",
            readOnlyText: "Readonly",
            allowDependenciesText: "Allow cross-project dependencies"
        },
        "Gnt.widget.taskeditor.TaskForm": {
            taskNameText: "Name",
            durationText: "Duration",
            datesText: "Dates",
            baselineText: "Baseline",
            startText: "Start",
            finishText: "Finish",
            percentDoneText: "Percent Complete",
            baselineStartText: "Start",
            baselineFinishText: "Finish",
            baselinePercentDoneText: "Percent Complete",
            effortText: "Effort",
            invalidEffortText: "Invalid effort value",
            calendarText: "Calendar",
            manuallyScheduledText: "Manually Scheduled",
            schedulingModeText: "Scheduling Mode",
            rollupText: "Rollup",
            wbsCodeText: "WBS code",
            "Constraint Type": "Constraint Type",
            "Constraint Date": "Constraint Date"
        },
        "Gnt.widget.DependencyGrid": {
            idText: "ID",
            snText: "SN",
            taskText: "任务名称",
            blankTaskText: "Please select task",
            invalidDependencyText: "Invalid dependency",
            parentChildDependencyText: "Dependency between child and parent found",
            duplicatingDependencyText: "Duplicate dependency found",
            transitiveDependencyText: "Transitive dependency",
            cyclicDependencyText: "Cyclic dependency",
            typeText: "类型",
            lagText: "间隔时间",
            clsText: "CSS class",
            endToStartText: "结束 －开始",
            startToStartText: "开始－开始",
            endToEndText: "结束－结束",
            startToEndText: "开始－结束"
        },
        "Gnt.widget.AssignmentEditGrid": {
            confirmAddResourceTitle: "Confirm",
            confirmAddResourceText: "Resource &quot;{0}&quot; not found in list. Would you like to add it?",
            noValueText: "Please select resource to assign",
            noResourceText: "No resource &quot;{0}&quot; found in the list"
        },
        "Gnt.widget.taskeditor.ProjectEditor": {
            generalText: "General",
            descriptionText: "Description"
        },
        "Gnt.widget.taskeditor.TaskEditor": {
            generalText: "General",
            resourcesText: "Resources",
            dependencyText: "Predecessors",
            addDependencyText: "Add new",
            dropDependencyText: "删除",
            notesText: "Notes",
            advancedText: "Advanced",
            addAssignmentText: "Add new",
            dropAssignmentText: "删除"
        },
        "Gnt.plugin.taskeditor.BaseEditor": {
            title: "任务信息",
            alertCaption: "信息",
            alertText: "请纠正标记错误来保存更改",
            okText: "确定",
            cancelText: "取消"
        },
        "Gnt.plugin.taskeditor.ProjectEditor": {
            title: "项目信息"
        },
        "Gnt.field.EndDate": {
            endBeforeStartText: "End date is before start date"
        },
        "Gnt.column.Note": {
            text: "Note"
        },
        "Gnt.column.AddNew": {
            text: "添加新列..."
        },
        "Gnt.column.EarlyStartDate": {
            text: "Early Start"
        },
        "Gnt.column.EarlyEndDate": {
            text: "Early Finish"
        },
        "Gnt.column.LateStartDate": {
            text: "Late Start"
        },
        "Gnt.column.LateEndDate": {
            text: "Late Finish"
        },
        "Gnt.field.Calendar": {
            calendarNotApplicable: "Task calendar has no overlapping with assigned resources calendars"
        },
        "Gnt.column.Slack": {
            text: "Slack"
        },
        "Gnt.column.Name": {
            text: "任务名称"
        },
        "Gnt.column.BaselineStartDate": {
            text: "Baseline Start Date"
        },
        "Gnt.column.BaselineEndDate": {
            text: "Baseline End Date"
        },
        "Gnt.column.Milestone": {
            text: "Milestone"
        },
        "Gnt.field.Milestone": {
            yes: "是",
            no: "否"
        },
        "Gnt.field.Dependency": {
            invalidFormatText: "Invalid dependency format",
            invalidDependencyText: "Invalid dependency found, please make sure you have no cyclic paths between your tasks",
            invalidDependencyType: "Invalid dependency type {0}. Allowed values are: {1}."
        },
        "Gnt.constraint.Base": {
            name: "A constraint",
            "Remove the constraint": "Remove the constraint",
            "Cancel the change and do nothing": "Cancel the change and do nothing"
        },
        "Gnt.constraint.FinishNoEarlierThan": {
            name: "Finish no earlier than",
            "Move the task to finish on {0}": "Move the task to finish on {0}"
        },
        "Gnt.constraint.FinishNoLaterThan": {
            name: "Finish no later than",
            "Move the task to finish on {0}": "Move the task to finish on {0}"
        },
        "Gnt.constraint.MustFinishOn": {
            name: "Must finish on",
            "Move the task to finish on {0}": "Move the task to finish on {0}"
        },
        "Gnt.constraint.MustStartOn": {
            name: "Must start on",
            "Move the task to start at {0}": "Move the task to start at {0}"
        },
        "Gnt.constraint.StartNoEarlierThan": {
            name: "Start no earlier than",
            "Move the task to start at {0}": "Move the task to start at {0}"
        },
        "Gnt.constraint.StartNoLaterThan": {
            name: "Start no later than",
            "Move the task to start at {0}": "Move the task to start at {0}"
        },
        "Gnt.column.ConstraintDate": {
            text: "Constraint date"
        },
        "Gnt.column.ConstraintType": {
            text: "Constraint"
        },
        "Gnt.widget.ConstraintResolutionForm": {
            dateFormat: "m/d/Y",
            OK: "确定",
            Cancel: "取消",
            "Resolution options": "Resolution options",
            "Don't ask again": "Don't ask again",
            "Task {0} violates constraint {1}": 'Task "{0}" violates constraint {1}',
            "Task {0} violates constraint {1} {2}": 'Task "{0}" violates constraint {1} {2}'
        },
        "Gnt.widget.ConstraintResolutionWindow": {
            "Constraint violation": "Constraint violation"
        },
        "Gnt.panel.ResourceHistogram": {
            resourceText: "Resource"
        }
    },
    apply: function(a) {
        Sch.locale.En.apply(a);
        this.callParent(arguments)
    }
});