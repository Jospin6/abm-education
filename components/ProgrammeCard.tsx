'use client';

import { Programme } from '@/lib/data';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Target, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProgrammeCardProps {
  programme: Programme;
  index: number;
}

export default function ProgrammeCard({ programme, index }: ProgrammeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={programme.imageUrl}
          alt={programme.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
            Programme {programme.id}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {programme.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {programme.shortDescription}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <Target className="w-4 h-4 mr-2 text-blue-500" />
            <span>{programme.targetAudience.length} publics cibles</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-2 text-green-500" />
            <span>{programme.benefits.length} avantages principaux</span>
          </div>
          {programme.duration && (
            <div className="flex items-center text-sm text-gray-500">
              <Award className="w-4 h-4 mr-2 text-purple-500" />
              <span>{programme.duration}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            href={`/programmes/${programme.slug}`}
            className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            En savoir plus
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-sm text-gray-500">→</span>
        </div>
      </div>
    </motion.div>
  );
}