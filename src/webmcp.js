// Exposes structured actions to WebMCP-capable browser agents via
// navigator.modelContext.provideContext(). Purely additive and feature-detected
// — no-op in browsers that don't implement the (still experimental) API.
import { profile, skills, experience, education } from './data/cv.en.js'

function textResult(text) {
  return { content: [{ type: 'text', text }] }
}

function summarizeExperience() {
  return experience
    .map((entry) =>
      entry.group
        ? `${entry.company}: ${entry.roles.map((role) => `${role.role} (${role.period})`).join('; ')}`
        : `${entry.company} — ${entry.role} (${entry.period})`
    )
    .join('\n')
}

function summarizeEducation() {
  return education
    .map((entry) =>
      entry.group
        ? `${entry.school}: ${entry.programs.map((program) => `${program.degree} (${program.period})`).join('; ')}`
        : `${entry.school} — ${entry.degree} (${entry.period})`
    )
    .join('\n')
}

export function registerWebMcpTools() {
  if (typeof navigator === 'undefined' || !navigator.modelContext?.provideContext) return

  navigator.modelContext.provideContext({
    tools: [
      {
        name: 'get_profile',
        description: `Get ${profile.name}'s professional profile: title, summary, location, and contact details.`,
        inputSchema: { type: 'object', properties: {} },
        execute: async () =>
          textResult(
            [
              `${profile.name} — ${profile.title}`,
              profile.about.replace(/\s+/g, ' ').trim(),
              `Location: ${profile.location}`,
              `Email: ${profile.email}`,
              `Phone: ${profile.phone}`,
              `LinkedIn: ${profile.linkedin}`,
            ].join('\n')
          ),
      },
      {
        name: 'get_experience',
        description: `Get ${profile.name}'s work experience history.`,
        inputSchema: { type: 'object', properties: {} },
        execute: async () => textResult(summarizeExperience()),
      },
      {
        name: 'get_education',
        description: `Get ${profile.name}'s education history.`,
        inputSchema: { type: 'object', properties: {} },
        execute: async () => textResult(summarizeEducation()),
      },
      {
        name: 'get_skills',
        description: `Get ${profile.name}'s list of professional skills.`,
        inputSchema: { type: 'object', properties: {} },
        execute: async () => textResult(skills.join(', ')),
      },
    ],
  })
}
