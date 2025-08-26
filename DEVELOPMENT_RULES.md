# Development Ground Rules

## Core Development Principles

These ground rules ensure we maintain code quality, avoid losing working functionality, and make steady progress without breaking existing features.

## 1. **No File Nuking Policy** 🚫💥

### Never Delete and Recreate Files
- **DO NOT** delete entire files when encountering issues
- **DO NOT** recommend "starting fresh" or "recreating from scratch"
- **DO** make targeted fixes and incremental improvements
- **DO** preserve existing working code and functionality
- **DO** debug issues step-by-step rather than starting over

### Rationale
- Prevents loss of working code segments
- Maintains development history and context
- Encourages understanding of existing code
- Reduces risk of introducing new bugs

## 2. **Incremental Improvements Only** 📈

### Small, Focused Changes
- **DO** make small, targeted changes to address specific issues
- **DO** focus on one problem at a time
- **DO** maintain existing behavior while adding new features
- **DO** test each change before moving to the next
- **DO NOT** make large structural overhauls when fixing minor problems
- **DO NOT** refactor multiple systems simultaneously

### Implementation Strategy
1. Identify the specific issue
2. Make minimal changes to fix it
3. Test the fix works
4. Move to next issue
5. Avoid scope creep

### Rationale
- Reduces debugging complexity
- Makes it easier to identify what broke
- Maintains working state throughout development
- Easier to review and understand changes

## 3. **SPEC-Compliant Efficiency** 📋⚡

### Alignment with Requirements
- **DO** ensure every change aligns with PROJECT_SPECIFICATION.md requirements
- **DO** prioritize performance and clean code
- **DO** minimize bundle size and runtime overhead
- **DO** keep solutions simple and maintainable
- **DO NOT** add features not specified in PROJECT_SPECIFICATION.md without explicit approval
- **DO NOT** sacrifice performance for convenience

### Technical Standards
- **Bundle Size**: Target <50KB gzipped (as per PROJECT_SPECIFICATION.md)
- **Performance**: 60fps during interactions
- **Dependencies**: Minimal external dependencies
- **Code Quality**: TypeScript strict mode, proper error handling
- **Browser Support**: Modern browsers only (as per SPEC)

### Rationale
- Ensures final product meets requirements
- Maintains performance standards
- Keeps codebase lean and maintainable
- Aligns with npm library goals

## 4. **Development Workflow** 🔄

### Before Making Changes
1. **Assess Current State**: What's working? What's broken?
2. **Identify Root Cause**: Don't treat symptoms, fix causes
3. **Plan Minimal Fix**: What's the smallest change to fix this?
4. **Consider Side Effects**: What might this change break?

### During Development
1. **Make One Change**: Focus on single issue
2. **Test Immediately**: Verify fix works
3. **Check for Regressions**: Ensure nothing else broke
4. **Document Rationale**: Why this approach?

### After Changes
1. **Verify SPEC Compliance**: Does this align with requirements?
2. **Performance Check**: Any performance impact?
3. **Code Quality**: Is this maintainable?
4. **Ready for Next**: What's the next priority?

## 5. **Problem-Solving Approach** 🔍

### When Encountering Issues
1. **Understand First**: Read existing code, understand intent
2. **Isolate Problem**: Identify exact cause
3. **Targeted Fix**: Make minimal change to fix root cause
4. **Test Thoroughly**: Verify fix and check for side effects
5. **Document Solution**: Why this fix was chosen

### When Stuck
- **DO** report the issue with attempted solutions
- **DO** ask for collaborative debugging
- **DO** explain what was tried and why it didn't work
- **DO NOT** delete files or start over
- **DO NOT** make random changes hoping something works

## 6. **Communication Guidelines** 💬

### Status Updates
- **Current Status**: What's working, what's not
- **Changes Made**: Specific changes and rationale
- **Next Steps**: Clear plan for next improvements
- **Issues Found**: Problems encountered and attempted solutions

### Progress Reporting
- ✅ **Completed**: Features/fixes that are working
- 🔄 **In Progress**: Current focus area
- ❌ **Issues**: Problems that need attention
- 📋 **Next**: Planned improvements

## 7. **Quality Checklist** ✅

Before considering any change complete:

### Functionality
- [ ] Original functionality preserved
- [ ] New feature works as intended
- [ ] No regressions introduced
- [ ] Error handling appropriate

### Performance
- [ ] No significant performance degradation
- [ ] Bundle size impact minimal
- [ ] Memory usage reasonable
- [ ] Smooth 60fps interactions maintained

### Code Quality
- [ ] TypeScript types correct
- [ ] No console errors
- [ ] Clean, readable code
- [ ] Proper error boundaries

### SPEC Compliance
- [ ] Aligns with PROJECT_SPECIFICATION.md requirements
- [ ] Doesn't break existing SPEC features
- [ ] Maintains API compatibility
- [ ] Documentation updated if needed

## 8. **Success Metrics** 📊

### What Constitutes Progress
- **Working Features**: Core functionality operational
- **SPEC Alignment**: Features match specification
- **Code Stability**: No crashes or major bugs
- **Performance**: Smooth user experience
- **Maintainability**: Clean, understandable code

### What to Avoid
- **Feature Creep**: Adding unspecified features
- **Over-Engineering**: Complex solutions for simple problems
- **Breaking Changes**: Losing working functionality
- **Performance Regression**: Slower than previous version

---

## Summary

These ground rules ensure we:
- ✅ **Preserve working code** through incremental improvements
- ✅ **Maintain quality** through careful testing and review
- ✅ **Stay focused** on SPEC requirements and user needs
- ✅ **Make steady progress** without losing ground
- ✅ **Build maintainable** solutions for the long term

**Remember**: Small, careful steps forward are better than large steps backward!