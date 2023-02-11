import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experince',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField( {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField( {
      name: 'company',
      title: 'company',
      type: 'text',
    }),
    defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    }),
    defineField({
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'isCurrentlyWorkinghere',
      title: 'IsCurrentlyWorkinghere',
      type: 'boolean',
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [{type: 'string'}],
      }),
  ],
})
